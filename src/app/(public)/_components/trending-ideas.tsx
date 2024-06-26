import { fetchIdeas } from '@/actions/fetch-ideas'
import IdeaItem from '@/app/(public)/ideas/idea-item'
import React from 'react'

type Props = {
  searchParams?: {
    search?: string;
    industries?: string[],
    page?: string;
  }
}

const TrendingIdeas = async ({ searchParams }: Props) => {
  const query = searchParams?.search || '';
  const industries = searchParams?.industries || [];
  const response = await fetchIdeas(1, 8, query, industries, { likes: { _count: "desc" } })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {response.ideas.map((idea) => <IdeaItem key={idea.id} item={idea} />)}
    </div>
  )
}

export default TrendingIdeas