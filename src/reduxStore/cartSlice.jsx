import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemCart: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.itemCart.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.itemCart.findIndex(
                item => item.name === action.payload

            );
            console.log("Index to remove:", index);

            if (index !== -1) {
                state.itemCart.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.itemCart = [];
        }
    }
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;