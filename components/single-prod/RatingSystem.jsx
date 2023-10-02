"use client"

import { Rating } from '@material-tailwind/react'
import React from 'react'

const RatingSystem = ({ value }) => {
  return (
    <Rating value={value} readonly/>
  )
}

export default RatingSystem