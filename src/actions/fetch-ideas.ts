'use server'
import { prisma } from "@/lib/db"




export async function fetchIdeas(
  page: number = 1,
  perPage: number = 16,
  search?: string,
  industries?: string[],
  orderBy: object = { createdAt: 'desc' }
) {
  // wait for 5 seconds
  // await new Promise(resolve => setTimeout(resolve, 5000))
  // const perPage = 16
  const offset = (page - 1) * perPage
  // Start with an empty where object
  let where = {
    AND: [] as object[]
  }

  // Add search condition if search is provided
  if (search) {
    where.AND.push(
      {
        detail: {
          contains: search,
          mode: 'insensitive'
        }
      }
    )
  }

  // Add industries condition if industries are provided
  if (industries && industries?.length > 0) {
    industries.map((industry) => {
      where.AND.push({
        industries: {
          some: {
            name: {
              equals: industry,
              mode: 'insensitive'
            }
          }
        }
      })
    })
  }

  const ideas = await prisma.idea.findMany({
    where: where.AND.length > 0 ? where : {},
    orderBy: orderBy,
    include: {
      industries: true,
      likes: true,
    },
    skip: offset,
    take: perPage
  })

  const count = await prisma.idea.count({
    where: where.AND.length > 0 ? where : {}
  })

  const totalPages = Math.ceil(count / perPage)
  const hasMore = page < totalPages
  const nextPage = hasMore ? page + 1 : null
  const prevPage = page > 1 ? page - 1 : null

  const ideasWithPagination = {
    ideas,
    totalPages,
    nextPage,
    prevPage
  }

  return ideasWithPagination // ideas
}