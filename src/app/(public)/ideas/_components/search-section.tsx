"use client"
import React from 'react'
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { ArrowRight, Search } from 'lucide-react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

type Props = {}

const SearchSection = (props: Props) => {

  // path and search params
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { push } = useRouter();

  // delay the search by 500ms
  const handleSearch = useDebouncedCallback((term) => {

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    push(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <Card className="h-72" radius="sm">
      <CardBody className="flex justify-center items-center bg-primary-500">
        <h2 className="text-3xl lg:text-4xl mb-4 font-medium text-white">AI Generated Business Ideas</h2>
        <div className="flex w-full lg:w-4/12 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            radius="full"
            size="lg"
            placeholder="Enter to search ideas ..."
            variant="faded"
            classNames={{
              inputWrapper: "px-3 py-7 bg-white ",
              input: "p-3"
            }}
            startContent={
              <Search size={20} />
            }
            endContent={
              <Button isIconOnly size="sm" color="primary" className="rounded-full" aria-label="Search">
                <ArrowRight />
              </Button>
            }
            onChange={e => handleSearch(e.target.value)} defaultValue={searchParams.get('search')?.toString()}
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default SearchSection