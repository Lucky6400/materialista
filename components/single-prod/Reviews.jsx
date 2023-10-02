"use client"

import { Button } from '@material-tailwind/react'
import React from 'react'
import { ReviewCard } from './ReviewCard'

const Reviews = () => {
  return (
    <div>
        <Button className="my-10 w-full md:w-max">
            Add a review
        </Button>
        <h2 className="w-full text-xl font-semibold border-b my-2 pb-2">
            See what people say about this product...
        </h2>

        <ReviewCard rating={4}/>
    </div>
  )
}

export default Reviews