"use client";

import { Pagination } from '@nextui-org/pagination'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  totalPages: number,
  currentPage?: number
}

const PaginationControls = ({ totalPages, currentPage = 1 }: Props) => {
  const router = useRouter()

  const onChangeHandler = (page: number) => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    params.set('page', page.toString())
    router.push(`${url.pathname}?${params.toString()}`)

  }
  return (
    <Pagination showControls total={totalPages} initialPage={currentPage} variant="bordered" onChange={(page) => onChangeHandler(page)} />
  )
}

export default PaginationControls