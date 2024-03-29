import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products"
import cartReducer from "./features/cart"
import modalReducer from "./features/modal"

export default configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        modal: modalReducer,
    },
})