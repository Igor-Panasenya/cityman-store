import { configureStore } from "@reduxjs/toolkit";
import category from './slices/categorySlice';
import product from './slices/productSlice';
import cart from './slices/cartSlice';
import sort from './slices/sortSlice';

export const store = configureStore({
    reducer: {
        category,
        product,
        cart,
        sort,
    },
})