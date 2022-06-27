import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addItemCart: (state, action) => {
            state.items.push({...action.payload, count: 1, addCart: true});
            state.totalPrice = state.items.reduce(function(sum, item) {
                return sum + (Number(item.price) * item.count)}, 0);
        },
        removeItemCart: (state, action) => {
            if (window.confirm("Are you sure you want to remove an item from your shopping cart ?")) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
                state.totalPrice = state.items.reduce(function(sum, item) {
                    return sum + (Number(item.price) * item.count)}, 0);
            }
        },
        clearCart: (state) => {
            if (window.confirm("Are you sure you want to empty the cart ?")) {
                state.items = [];
                state.totalPrice = 0;
            }
        },

        addCount: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id);
            findItem.count++;
            state.totalPrice = state.items.reduce(function(sum, item) {
                return sum + (Number(item.price) * item.count)}, 0);
        },
        removeCount: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id)
            findItem.count--;
            state.totalPrice = state.items.reduce(function(sum, item) {
                return sum + (Number(item.price) * item.count)}, 0);
        },
    }
});

export const { addItemCart, removeItemCart, clearCart, addCount, removeCount } = cartSlice.actions;

export default cartSlice.reducer