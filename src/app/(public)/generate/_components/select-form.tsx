
"use client"

import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react'
import React, { Fragment } from 'react'
import categories from '../../../../../prisma/uniqueCategories'
import axios from 'axios'
import { toast } from 'react-toastify'



const SelectForm = () => {

  const generateHandler = () => {
    axios.post(`/api/generate`).then(() => console.log("this is working")).catch((err) => {
      toast(err.message || "An error occurred", { type: "error", position: "bottom-right", theme: "colored", })
    })
  }
  return (
    <div className="flex justify-center items-center space-x-2">
      <Autocomplete label="Select Business Category" className="max-w-xs">
        {categories.map((category, index) => (
          <AutocompleteItem key={index} value={category}>
            {category}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Button size="lg" variant="solid" radius="md" onClick={generateHandler}>Generate</Button>
    </div>
  )
}

export default SelectForm