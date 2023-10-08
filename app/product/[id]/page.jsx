import Container from '@/components/common/Container';
import AddToCart from '@/components/single-prod/AddToCart';
import RatingSystem from '@/components/single-prod/RatingSystem';
import Reviews from '@/components/single-prod/Reviews';
import { getSingleProduct } from '@/services'
import Image from 'next/image';
import React from 'react'

const SingleProduct = async ({ params }) => {
    //console.log(params.id)
    const product = await getSingleProduct(params.id);
    //console.log(product)
    return (
        <Container className="w-full px-2 max-w-7xl mx-auto py-10">
            <Image
                src={product.image}
                width={400}
                height={400}
                className='max-w-full w-full h-[40vh] md:h-[70vh] object-contain'
                alt={product.title}
            />
            <h1 className="w-full my-3 text-xl md:text-4xl font-semibold">
                {product.title}
            </h1>
            <h2 className="my-3 font-bold md:text-8xl text-5xl">
                ${product.price}
            </h2>
            <div className="flex items-center gap-5 flex-wrap">
                <RatingSystem value={Math.round(product.rating.rate)} />
                <small className="text-sm font-semibold">
                    {product.rating.rate} of {product.rating.count} reviews
                </small>
            </div>
            <p className="my-3 text-gray-700 text-sm font-light">
                {product.description}
            </p>
            <AddToCart item={product}/>
            <Reviews/>
        </Container>
    )
}

export default SingleProduct