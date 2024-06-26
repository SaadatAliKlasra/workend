"use client";

import { Button } from '@nextui-org/button';
import { Disc3 } from 'lucide-react'
import axios from "axios"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import clsx from "clsx";

type Props = {}

const IdeasGeneratorButton = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()


  const generateIdeaHandler = async () => {
    setLoading(true)
    await axios.post('/api/generate').then((response: any) => {
      router.refresh()
      toast(response.data.message, { type: "success", position: "bottom-right", theme: "colored" })
    }).catch(err => toast(err.message, { type: "error", position: "bottom-right", theme: "colored" })).finally(() => setLoading(false))
  }

  return (

    <Button isLoading={loading} isDisabled={loading} variant="bordered" radius="full" onClick={generateIdeaHandler}>
      Random
    </Button>
  )
}

export default IdeasGeneratorButton