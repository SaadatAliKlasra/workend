"use client";
import React from 'react'

import axios from 'axios';
import { toast } from "react-toastify"
import { useDebouncedCallback } from 'use-debounce';

import { Button } from "@nextui-org/button";

import { HeartIcon } from './heart-icon';

type Props = {
  onClick?: () => void
  likes: number,
  ideaId: string,
  userLiked: boolean
}

const HeartIconBtn = (props: Props) => {
  const [likes, setLikes] = React.useState(props.likes)
  const [userLiked, setUserLiked] = React.useState(props.userLiked)
  // use debounce to prevent multiple clicks


  const likeClickHandler = useDebouncedCallback(() => {
    setUserLiked((userLiked) => !userLiked)
    setLikes((likesCount) => userLiked ? likesCount - 1 : likesCount + 1)
    axios.post(`/api/ideas/${props.ideaId}/like`).catch((err) => {
      toast(err.message || "An error occurred", { type: "error", position: "bottom-right", theme: "colored", })
      setUserLiked((userLiked) => !userLiked)
      setLikes((likesCount) => userLiked ? likesCount + 1 : likesCount - 1)
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