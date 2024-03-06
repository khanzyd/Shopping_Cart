import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {

    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => {
        if (item.id == payload.id) {
          state.totalItems -= item.amount;
        }
        return item.id != payload.id;
      });
    },

    addItem: (state, { payload }) => {
      let exist = false;
      state.cartItems.forEach((item) => {
        if (item.id == payload.id) {
          item.amount += 1;
          exist = true;
        }
      });
      !exist && state.cartItems.push({ ...payload, amount: 1 });
      state.totalItems += 1;
    },

    increaseAmount: (state, { payload }) => {
      state.cartItems.forEach((item) => {
        if (item.id == payload.id) {
          item.amount += 1;
          state.totalItems += 1;
        }
      });
    },

    decreaseAmount: (state, { payload }) => {
      state.cartItems.forEach((item) => {
        if (item.id == payload.id) {
          if (item.amount > 1) {
            item.amount -= 1;
          } else {
            state.cartItems = state.cartItems.filter(
              (item) => item.id != payload.id
            );
          }
        }
      });
      state.totalItems -= 1;
    },

    calculateTotalAmount: (state) => {
        state.totalAmount = 0;
        state.cartItems.length>0 && state.cartItems.map((item) => {
        state.totalAmount += item.price * item.amount;
      })
    },

    clearCart:(state)=>{
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    }
  },
});

export const { removeItem, addItem, increaseAmount, decreaseAmount, calculateTotalAmount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
