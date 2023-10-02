"use client"
import { ecommerceCategories } from '@/data/categories'
import { Button, ButtonGroup } from '@material-tailwind/react'
import React from 'react'

const Categories = () => {
    return (
        <div className="relative w-full h-14 max-w-6xl scr-hid my-4 mx-auto overflow-x-scroll overflow-y-hidden">
            <div className="w-max flex h-max absolute top-0 left-0">
                <ButtonGroup>
                    {ecommerceCategories.map((v, i) => (
                        <Button key={v}>{v}</Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Categories