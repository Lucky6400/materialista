import CartItem from '@/components/cart/CartItem'
import CartItemList from '@/components/cart/CartItemList'
import React from 'react'

const Cart = () => {
    return (
        <div className="flex flex-wrap justify-between w-full max-w-7xl mx-auto">
            <div className="md:w-9/12 w-full py-5">
                
                <CartItemList />
            </div>
        </div>
    )
}

export default Cart