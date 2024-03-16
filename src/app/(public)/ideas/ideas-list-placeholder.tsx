import React from 'react'
import { Card, Skeleton } from "@nextui-org/react";

type Props = {
  count: number
}

const IdeasListPlaceholder = ({ count }: Props) => {
  const items = Array.from({ length: count }, (_, i) => i)
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5">
      {items.map((item) => (
        <Card className="p-2" shadow="sm" radius="sm" key={item}>
          <div className="flex flex-col space-y-3 p-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-4/5 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/5 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-4/5 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-4/5 rounded-lg" />
              <Skeleton className="h-4 w-3/5 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
            <div className="flex justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-10 w-10 rounded-lg" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-20 rounded-lg" />
                <Skeleton className="h-4 w-20 rounded-lg" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default IdeasListPlaceholder