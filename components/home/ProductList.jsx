"use client";

import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';
import axios from 'axios';
import { Spinner } from '@material-tailwind/react';

const ProductList = ({ title, category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        setLoading(true);
        try {
            if (category) {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.data;
                console.log(data)
                setProducts(data);
            } else {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                const data = await response.data;
                console.log(data)
                setProducts(data);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    //eslint-disable-next-line
    useEffect(() => { getProducts() }, [])
    return (
        <>

            <h1 className="text-xl mt-4 font-semibold px-2 border-b py-3">
                {title}
            </h1>
            <div className="flex px-2 gap-2 justify-around flex-wrap">

                {loading ? <Spinner className='w-12 h-12' /> : (products?.length > 0 ? products?.slice(0, 4).map((v, i) => (<ProductCard key={i} item={v} />)) : <></>)}
            </div>
        </>
    )
}

export default ProductList