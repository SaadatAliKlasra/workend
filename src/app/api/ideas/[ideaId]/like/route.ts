import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";


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

  const { userId } = await req.json()
  if (!userId) {
    return NextResponse.json(
      { message: "User not found!" },
      { status: 404 })
  }
  try {
    await prisma.ideaLike.create({
      data: {
        ideaId: ideaId,
        userId: userId
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
          userId: userId
        }
      }
    })
    return NextResponse.json({ message: "Idea unliked!" }, {
      status: 200
    })
  }

}