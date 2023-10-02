"use client"

import { cartActions } from '@/redux/cartSlice';
import { Button, IconButton, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddToCart = ({ item }) => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addToCart({ ...item, quantity: value, total: item.price * value }))
        setValue(0);
    }

    return (
        <div className="flex my-3 gap-2 items-center">
            <IconButton
                onClick={() => setValue(p => p > 0 ? (p - 1) : 0)}
                variant="gradient" className="rounded-full text-3xl">
                -
            </IconButton>
            <input type="text" className="w-10 border text-center p-2 border-gray-600 rounded-md" value={value}
                onChange={e => setValue(e.target.value)}
            />
            <IconButton
                onClick={() => setValue(p => p + 1)}
                variant="gradient" className="rounded-full text-3xl">
                +
            </IconButton>

            <Button
                onClick={addToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default AddToCart