"use client";

import { cartActions } from "@/redux/cartSlice";
import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Quantity = ({ qty, id }) => {
    const [value, setValue] = useState(qty || 0);
    const dispatch = useDispatch();

    return (
        <div className="flex my-3 gap-2 justify-center w-full items-center">
            <IconButton
                onClick={() => {
                    setValue(p => p > 0 ? p - 1 : 0);
                    if (value > 0) {
                        dispatch(cartActions.decrement({ id }))
                    }
                }}
                variant="gradient" className="rounded-full text-3xl">
                -
            </IconButton>
            <input type="text" className="w-10 border text-center p-2 border-gray-600 rounded-md" value={value}
                onChange={e => setValue(e.target.value)}
            />
            <IconButton
                onClick={() => {
                    setValue(p => p + 1)
                    dispatch(cartActions.increment({ id }))
                }}
                variant="gradient" className="rounded-full text-3xl">
                +
            </IconButton>
        </div>

    )
}

export default Quantity