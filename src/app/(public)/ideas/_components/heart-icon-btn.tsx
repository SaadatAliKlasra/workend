"use client";
import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { toast } from "react-toastify"
import { useDebouncedCallback } from 'use-debounce';
import { v4 as uuidv4 } from 'uuid'
import { Button } from "@nextui-org/button";

import { HeartIcon } from './heart-icon';
import { IdeaLike } from '@prisma/client';

type Props = {
  onClick?: () => void
  likes: IdeaLike[],
  ideaId: string,
}

const HeartIconBtn = (props: Props) => {
  const [userId, setUserId] = useState<string | null>(null)
  const [userLiked, setUserLiked] = useState<boolean>(false)
  // use debounce to prevent multiple clicks

  useEffect(() => {
    let userId = localStorage.getItem("userId")
    if (!userId) {
      userId = uuidv4()
      localStorage.setItem("userId", userId)
    }
    setUserId(userId)
    setUserLiked(props.likes.some((like) => like.userId === userId))

  }, [props.likes])

  const likeClickHandler = useDebouncedCallback(() => {

    // get or create uuid in local storage


    setUserLiked((userLiked) => !userLiked)

    axios.post(`/api/ideas/${props.ideaId}/like`, {
      userId: userId
    }).catch((err) => {
      toast(err.message || "An error occurred", { type: "error", position: "bottom-right", theme: "colored", })
      setUserLiked((userLiked) => !userLiked)

    })
  }, 500, { leading: true, trailing: false })

  return (
    <Button isIconOnly variant="light" aria-label="Like" onClick={likeClickHandler}>
      {userLiked ? <HeartIcon fill="#bc4749" filled size={28} /> : <HeartIcon size={28} />}
      {/* {likes} */}
    </Button>


  )
}

export default HeartIconBtn