import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems : [],
    totalItems: 0,
    totalAmount : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        removeItem: (state)=>{

        },
        addItem:(state,{ payload })=>{
            state.totalItems += 1;
        }
    }
})

export const {removeItem, addItem} = cartSlice.actions;
export default cartSlice.reducer;