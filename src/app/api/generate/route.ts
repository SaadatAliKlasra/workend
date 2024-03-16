import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import client from "@/lib/openai-client";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export async function POST(req: NextRequest) {
  // removeDuplicate(categories)
  // return new NextResponse("Categories updated", { status: 200 })
  try {
    const { userId } = auth()
    // only logged users can generate new idea
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    // Get the random item from the array
    const category = await prisma.category.findFirst({
      orderBy: {
        ideas: {
          _count: "asc"
        }
      }
    })
    const existingIdeas = await prisma.idea.findMany({
      orderBy: {
        createdAt: "desc"
      },
      where: {
        category: {
          name: category?.name
        }
      },
      include: {
        industries: true,
        targetAudiences: true,
        businessModels: true
      }
    })

    const chat_completion_messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: 'You are a creative and unique business ideas generator. You focus on a specific problem and give a business idea in detail. Explain business in atleast 50-70 words. Generate the output in the following json format:{"slug": "<short slug from business idea>", "detail": "<A detailed description of the idea and how it addresses the problem>", "industry":"<The relevant industry sector in comma separated values.>", "targetAudience":"<The primary groups who would benefit from this idea in comma separated values>", "businessModel":"<Potential ways to generate revenue in comma separated values>"}',
      },
      {
        role: "assistant",
        content: `{"slug": "smart-grocery-list-app", "detail": "A smart grocery list app that uses AI technology to analyze buying patterns, suggest items to add based on past purchases, and organize the list by store layout for an efficient shopping experience. Users can set budget limits, receive notifications for deals, and easily share lists with family members. This app streamlines the grocery shopping process and helps users save time and money.", "industry": "Technology, Retail", "targetAudience": "Busy professionals, Families, Budget-conscious shoppers", "businessModel": "Subscription fees, In-app advertisements, Partnerships"}`,
      },
      {
        role: "user",
        content: `generate a unique business idea that solves a specific problem in the ${category} industry.`,
      }
    ];

    if (existingIdeas.length > 0) {
      existingIdeas.map((existingIdea) => {
        chat_completion_messages.splice(chat_completion_messages.length - 1, 0, {
          role: "assistant",
          content: `{"slug": ${existingIdea.slug} , "detail": ${existingIdea.detail}, "industry": "${existingIdea.industries.map((industry) => industry.name)}", "targetAudience": "${existingIdea.targetAudiences.map((aud) => aud.name)}", "businessModel": "${existingIdea.businessModels.map((bm) => bm.name)}"}`,
        });
      })
    }

    const chat_completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      temperature: 1.5,
      messages: chat_completion_messages
    });

    const content = chat_completion.choices[0].message.content
    const data = JSON.parse(content || "{}")
    // check if data is not empty
    if (Object.keys(data).length === 0) {
      return NextResponse.json({ message: "No idea generated" }, { status: 400 })
    }
    // check if data is in the correct format
    if (!data.slug || !data.detail || !data.industry || !data.targetAudience || !data.businessModel) {
      return NextResponse.json({ message: "Invalid idea format" }, { status: 400 })
    }


    const idea = await prisma.idea.create({
      data: {
        slug: slugify(data.slug, {
          replacement: '-',  // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true,      // convert to lower case, defaults to `false`
          strict: true,     // strip special characters except replacement, defaults to `false`
          locale: 'vi',      // language code of the locale to use
          trim: true         // trim leading and trailing replacement chars, defaults to `true`
        }),
        detail: data.detail,
        userId: userId,
      }
    })
    // create category
    if (category) {

      await prisma.category.update({
        where: {
          id: category.id
        },
        data: {
          ideas: {
            connect: {
              id: idea.id
            }
          }
        }
      })
    }
    const industries = data.industry.split(",");
    for (let i = 0; i < industries.length; i++) {
      const industry = industries[i].trim()
      await prisma.industry.upsert({
        where: {
          name: industry
        },
        update: {
          ideas: {
            connect: {
              id: idea.id
            }
          }
        },
        create: {
          name: industry,
          ideas: {
            connect: {
              id: idea.id
            }
          }
        }
      })
    }

    const targetAudiences = data.targetAudience.split(",");
    for (let i = 0; i < targetAudiences.length; i++) {
      const targetAudience = targetAudiences[i].trim()
      await prisma.targetAudience.upsert({
        where: {
          name: targetAudience
        },
        update: {
          ideas: {
            connect: {
              id: idea.id
            }
          }
        },
        create: {
          name: targetAudience,
          ideas: {
            connect: {
              id: idea.id
            }
          }
        }
      })
    }

    const businessModels = data.businessModel.split(",");
    for (let i = 0; i < businessModels.length; i++) {
      const businessModel = businessModels[i].trim()
      await prisma.businessModel.upsert({
        where: {
          name: businessModel
        },
        update: {
          ideas: {
            connect: {
              id: idea.id
            }
          }
        },
        create: {
          name: businessModel,
          ideas: {
            connect: {
              id: idea.id
            }
          }
        }
      })
    }

    return NextResponse.json({ message: `Idea generated in ${category?.name || 'unknown'} category` }, { status: 201 })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: "Duplicate idea was generated, please try again!" }, { status: 500 })
  }
}
