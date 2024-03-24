import { Suspense } from 'react'
import SearchSection from './_components/search-section';
import IdeasListPlaceholder from '@/app/(public)/ideas/ideas-list-placeholder';
import SearchChip from '@/components/search/search-chip';
import IdeasList from '@/app/(public)/ideas/ideas-list';
import type, { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas List - Workend - AI Generated Business Ideas",
  description: "Explore our this page for AI-generated business ideas! Discover new and exciting concepts made by Open AI and Chat GPT 3.5 turbo. Find ideas for starting your own business easily. Let AI help you find your next big idea today!",
  openGraph: {
    title: 'Ideas - Workend - AI Generated Business Ideas',
    description: "Explore our this page for AI-generated business ideas! Discover new and exciting concepts made by Open AI and Chat GPT 3.5 turbo. Find ideas for starting your own business easily. Let AI help you find your next big idea today!",
    url: 'https://workend.co/ideas',
    siteName: 'Workend',
    images: [
      {
        url: 'https://workend.co/images/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Workend - AI Generated Business Ideas',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
        {/* <Suspense key={searchParams?.industries?.join() || searchParams?.search || searchParams?.page} fallback={<IdeasListPlaceholder count={8} />}> */}
        <IdeasList searchParams={searchParams} />
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default Page