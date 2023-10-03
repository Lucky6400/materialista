import CartItem from '@/components/cart/CartItem'
import CartItemList from '@/components/cart/CartItemList'
import Checkout from '@/components/cart/Checkout'
import React from 'react'

const Cart = () => {
    return (
        <div className="flex flex-wrap justify-between w-full max-w-7xl mx-auto">
            <div className="md:w-9/12 w-full py-5">
                <CartItemList />
            </div>
            <div className="md:w-3/12 px-2 w-full py-5">
                <Checkout />
            </div>
        </div>
    )
}

export default Cart