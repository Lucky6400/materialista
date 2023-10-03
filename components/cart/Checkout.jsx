"use client"

import { Button, Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const cartItems = useSelector(s => s.cartReducer.items);
    let cost = 0;
    const discount = 200;
    if (cartItems && cartItems.length) {
        cost = cartItems.reduce((acc, item) => acc + item.total, 0)?.toFixed(2);
    }
    const total = Math.max(cost - discount, 0)?.toFixed(2);
    return (
        <Card className='p-4'>
            <h2 className="w-full text-black border-b uppercase text-xl font-semibold">
                Checkout
            </h2>
            <p className="flex mt-3 justify-between items-center">
                <b>Cost:</b>
                <span>
                    ${cost}
                </span>
            </p>
            <p className="flex mt-3 border-b pb-2 justify-between items-center">
                <b>Discount:</b>
                <span>
                    ${cost !== 0 ? discount : 0}
                </span>
            </p>
            <p className="flex mt-3 text-xl justify-between items-center">
                <b>Total:</b>
                <span>
                    ${total}
                </span>
            </p>
            <Button fullWidth className="my-2"> checkout </Button>
        </Card>
    )
}

export default Checkout