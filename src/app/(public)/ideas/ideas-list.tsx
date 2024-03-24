
import IdeaItem from "./idea-item";
import { fetchIdeas } from "@/actions/fetch-ideas";

import { v4 as uuid } from "uuid";
import PaginationControls from "@/components/pagination-controls";

export default async function IdeasList({ searchParams, orderBy }: {
  searchParams?: {
    search?: string;
    industries?: string[],
    page?: string;
  },
  orderBy?: object
}) {

  const query = searchParams?.search || '';
  const currentPage = Number(searchParams?.page) || 1;
  const industries = searchParams?.industries || [];

  const response = await fetchIdeas(currentPage, undefined, query, industries, orderBy)


  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        {response.ideas.map((item) => (
          <IdeaItem key={item.id} item={item} />
        )
        )}
      </div>
      {/* Pagination */}
      {response.totalPages > 1 && (
        <div className="flex justify-center my-3">
          <PaginationControls totalPages={response.totalPages} currentPage={parseInt(searchParams?.page || "1")} />
        </div>
      )}
    </div>
  )
}

