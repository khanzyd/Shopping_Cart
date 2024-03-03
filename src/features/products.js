import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    products: null,
    isLoading: true
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload.products;
      state.isLoading = false;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
