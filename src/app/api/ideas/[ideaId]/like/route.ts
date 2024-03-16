import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest, { params }: { params: { ideaId: string } }) {
  const { ideaId } = params

  const ideaExist = await prisma.idea.count({
    where: {
      id: ideaId
    }
  })

  if (!ideaExist) {
    return NextResponse.json(
      { message: "Idea not found!" },
      { status: 404 })
  }
  const exist = cookies().get('anonymousId')
  if (!exist) {
    cookies().set('anonymousId', uuidv4())
  }
  const anonymousId = cookies().get('anonymousId')
  try {
    await prisma.ideaLike.create({
      data: {
        ideaId: ideaId,
        userId: anonymousId!.value
      }
    })
    return NextResponse.json({ message: "Idea liked!" }, {
      status: 201
    })
  } catch (error) {
    await prisma.ideaLike.delete({
      where: {
        ideaId_userId: {
          ideaId: ideaId,
          userId: anonymousId!.value
        }
      }
    })
    return NextResponse.json({ message: "Idea unliked!" }, {
      status: 200
    })
  }

}