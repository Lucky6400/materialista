"use client";

import Image from "next/image";
import RatingSystem from "../single-prod/RatingSystem";
import Quantity from "./Quantity";
import { Card } from "@material-tailwind/react";

const CartItem = ({ item }) => {
    return (
        <Card className="p-4 w-full">
            <div className="flex flex-col gap-3 md:gap-0 md:flex-row w-full items-start">
                <Image
                    src={item.image}
                    alt='image'
                    width={300}
                    height={300}
                    className='w-full md:w-1/5 h-32 object-contain'
                />

                <div className='md:w-3/5 w-full flex px-2 flex-col gap-4'>
                    <h4 className="text-xl font-semibold">
                        {item.title}
                    </h4>
                    <p className="text-gray-500 font-light text-sm">
                        {item.description?.slice(0, 100) + "..."}
                    </p>
                    <RatingSystem value={Math.round(item.rating.rate)} />
                </div>

                <div className="md:w-1/5 w-full">
                    <h2 className="text-3xl w-full text-center font-bold text-gray-800">
                        ${item.total?.toFixed(2)}
                    </h2>
                    <Quantity qty={item.quantity} id={item.id} />
                </div>
            </div>
        </Card>
    )
}

export default CartItem