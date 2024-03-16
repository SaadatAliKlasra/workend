"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Chip } from "@nextui-org/react";

type Props = {
  items?: string[]
}

const SearchChip = ({ items }: Props) => {
  const router = useRouter()
  const pathname = usePathname();

  // remove the industry from the url
  const filterHandler = (industry: string) => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.delete('industries', industry)
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    items?.map((industry, count) => (
      <Chip key={count} onClose={() => (filterHandler(industry))} variant="bordered">
        {industry}
      </Chip>
    ))
  )
}

export default SearchChip