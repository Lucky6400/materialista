import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const currentIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (currentIndex !== -1) {
                state.items[currentIndex].quantity++;
                state.items[currentIndex].total = state.items[currentIndex].price * state.items[currentIndex].quantity;
            } else {
                state.items.push(action.payload)
            }
        },
        increment(state, action) {
            const currentIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (currentIndex !== -1) {
                state.items[currentIndex].quantity++;
                state.items[currentIndex].total = state.items[currentIndex].price * state.items[currentIndex].quantity;
            }
        },
        decrement(state, action) {
            const currentIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (currentIndex !== -1) {
                if (state.items[currentIndex].quantity === 1) {
                    state.items.splice(currentIndex, 1);
                } else {
                    state.items[currentIndex].quantity--;
                    state.items[currentIndex].total = state.items[currentIndex].price * state.items[currentIndex].quantity;
                }
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;