
import React from 'react'
import { Card, CardBody } from "@nextui-org/card";
import SelectForm from './select-form';


const GenerateSection = () => {


  return (
    <Card className="h-72" radius="sm">
      <CardBody className="flex justify-center items-center bg-primary-500">
        <h2 className="text-3xl lg:text-4xl mb-4 font-medium text-white">Generate Business Idea from Category</h2>
        <div className="flex w-full lg:w-4/12 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <SelectForm />
        </div>
      </CardBody>
    </Card>
  )
}

export default GenerateSection