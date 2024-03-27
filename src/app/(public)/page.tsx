
import { Suspense } from 'react'
import SearchChip from "@/components/search/search-chip"
import TrendingIdeas from './_components/trending-ideas';
import RecentIdeas from './_components/recent-ideas';
import { prisma } from '@/lib/db';
import IdeasListPlaceholder from '@/app/(public)/ideas/ideas-list-placeholder';
export default async function Page({ searchParams }: {
  searchParams?: {
    search?: string;
    industries?: string[],
    page?: string;
  };
}) {
  if (searchParams && searchParams.industries && !Array.isArray(searchParams.industries)) {
    searchParams.industries = [searchParams.industries]
  }


  return (
    <div>
      <div className="my-4">
        <div className="text-2xl font-medium mb-1">Most Popular</div>
        <p className="text-sm text-dark">
          Explore business ideas from different industries. Click on the categories to filter the results.
        </p>
        {/* applied categories filter */}
        <div className="flex space-x-2 p-4">
          <SearchChip items={searchParams?.industries} />
        </div>
        <Suspense fallback={
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5">
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
          </div>
        }>
          <TrendingIdeas searchParams={searchParams} />
        </Suspense>
      </div>
      <div className="my-4">
        <div className="text-2xl font-medium mb-1">Recent Ideas</div>
        <p className="text-sm text-dark">
          Explore business ideas from different industries. Click on the categories to filter the results.
        </p>
        {/* applied categories filter */}
        <div className="flex space-x-2 p-4">
          <SearchChip items={searchParams?.industries} />
        </div>
        <Suspense fallback={
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5">
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
            <IdeasListPlaceholder />
          </div>
        }>
          <RecentIdeas searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
