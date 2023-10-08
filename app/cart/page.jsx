import CartItem from '@/components/cart/CartItem'
import CartItemList from '@/components/cart/CartItemList'
import Checkout from '@/components/cart/Checkout'
import Container from '@/components/common/Container'
import React from 'react'

const Cart = () => {
    return (
        <Container>
            <div className="md:w-9/12 w-full py-5">
                <CartItemList />
            </div>
            <div className="md:w-3/12 px-2 w-full py-5">
                <Checkout />
            </div>
        </Container>
    )
}

export default Cart