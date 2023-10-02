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

                : <></>}

        </div>
    )
}

export default CartItemList