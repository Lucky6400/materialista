"use client";
import { cartActions } from "@/redux/cartSlice";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export function ProductCard({ item }) {
    const dispatch = useDispatch();

    const addToCart = () => dispatch(cartActions.addToCart({ ...item, quantity: 1, total: item.price }));

    return (
        <Card className="w-full md:w-72 max-w-full">
            <CardHeader shadow={false} floated={false} className="h-48">
                <Image
                    width={300}
                    height={300}
                    src={item?.image}
                    alt="card-image"
                    className="h-full w-full object-contain"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2">
                    <Link href={"/product/" + item.id}>
                        <Typography color="blue-gray" className="font-medium">
                            {item.title?.length > 25 ? item.title.slice(0, 25) + "..." : item.title}
                        </Typography>
                    </Link>
                    <Typography color="blue-gray" className="font-bold text-2xl">
                        ${item.price}
                    </Typography>
                </div>
                <div className="flex mb-2 gap-2 items-center">
                    <Rating
                        value={Math.round(item.rating.rate)}
                        readonly
                    />
                    <small className="text-sm font-semibold">
                        {item.rating.rate} of {item.rating.count} reviews.
                    </small>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {item.description?.slice(0, 100)}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    onClick={addToCart}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}