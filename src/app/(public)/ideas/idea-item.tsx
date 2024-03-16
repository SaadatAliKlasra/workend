"use client"

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import { Chip } from "@nextui-org/chip";
import { Heart, Share2 } from 'lucide-react'
import { Idea, IdeaLike, Industry } from '@prisma/client'
import HeartIconBtn from './_components/heart-icon-btn'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


type Props = {
  item: Idea & {
    industries: Industry[],
    likes: IdeaLike[]
  },
  userId: string
}

const IdeaItem = ({ item, userId }: Props) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (!params.getAll('industries').includes(term)) {
      params.append('industries', term);
      replace(`${pathname}?${params.toString()}`);
    }
  }
  const userLiked = item.likes.some((like) => like.userId === userId)
  return (
    <Card className="bg-slate-50 p-2" shadow="sm" radius="sm">
      <CardBody>
        {item.detail}
      </CardBody>
      <CardFooter className="flex justify-between space-x-2">
        <HeartIconBtn likes={item.likes.length} ideaId={item.id} userLiked={userLiked} />
        <div className='flex flex-wrap gap-1'>
          {item.industries.map((industry, index) => (
            <Chip key={index} onClick={() => handleSearch(industry.name.toLowerCase())} variant="bordered" className="cursor-pointer">
              {industry.name}
            </Chip>
          ))}
        </div>
        {/* <Button variant="outline" className='w-full'>
          <Share2 size={16} className='mr-1' />
          3
        </Button> */}
      </CardFooter>
    </Card>
  )
}

export default IdeaItem