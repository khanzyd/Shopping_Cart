import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products"
import cartReducer from "./features/cart"

export default configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer
    },
})