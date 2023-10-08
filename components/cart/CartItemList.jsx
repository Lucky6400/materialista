"use client"

import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartItemList = () => {
    const items = useSelector(s => s.cartReducer.items);
    console.log(items)
    return (
        <div className="flex w-full flex-col gap-3">
            {items && items.length > 0 ?
                items.map(item => (<CartItem key={item.id} item={item} />))

                : <div className="w-full text-center font-semibold py-10 lg:text-3xl sm:text-2xl text-xl">
                    No items found! <br /> Go to a product and add it to your cart.
                </div>}

        </div>
    )
}

export default CartItemList