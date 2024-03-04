import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculateTotalAmount } from "../features/cart";
const Cart = () => {
  let { cartItems, totalAmount } = useSelector((store) => store.cart);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems]);

  if (cartItems.length < 1) {
    return (
      <>
        <h2 className="text-3xl font-extrabold text-slate-100 h-screen text-center mt-10">
          Your cart is Empty !
        </h2>
      </>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen text-slate-100">
        <h2 className="font-bold text-center text-6xl py-12">My Cart</h2>
        <div className="bg-slate-200 px-3">
          {cartItems.map((item) => {
            console.log(item);
            return <CartItem cartItem={item} />;
          })}
          <hr className="bg-black h-[3px] my-2" />
          <div className="font-bold text-2xl text-zinc-950 py-4 ">
            <div>
              <span>Total :</span>
            </div>
            <div>
              <span>{`$ ${totalAmount}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
