import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isModalOpen : false
}

let modalSlice = createSlice({
    name:"modal",
    initialState: initialState,
    reducers:{
        openModal:(state)=>{
            state.isModalOpen = true;
        },
        closeModal:(state)=>{
            state.isModalOpen = false;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions; 
export default modalSlice.reducer;