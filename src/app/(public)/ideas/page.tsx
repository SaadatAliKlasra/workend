import { Suspense } from 'react'
import SearchSection from './_components/search-section';
import IdeasListPlaceholder from '@/app/(public)/ideas/ideas-list-placeholder';
import SearchChip from '@/components/search/search-chip';
import IdeasList from '@/app/(public)/ideas/ideas-list';

const Page = ({ searchParams }: {
  searchParams?: {
    search?: string;
    industries?: string[],
    page?: string;
  };
}) => {
  if (searchParams && searchParams.industries && !Array.isArray(searchParams.industries)) {
    searchParams.industries = [searchParams.industries]
  }
  return (
    <div>
      <SearchSection />
      {/* content */}
      <div className="mt-4">
        <div className="text-center text-2xl font-medium mb-4">Business Ideas</div>
        <p className="text-sm text-dark text-center">
          Explore business ideas from different industries. Click on the categories to filter the results.
        </p>
        {/* applied categories filter */}
        <div className="flex space-x-2 p-4">
          <SearchChip items={searchParams?.industries} />
        </div>
        <Suspense key={searchParams?.industries?.join() || searchParams?.search || searchParams?.page || Math.random()} fallback={<IdeasListPlaceholder count={8} />}>
          <IdeasList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}

export default Page