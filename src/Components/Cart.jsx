import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

import { calculateTotalAmount } from "../features/cart";
import Modal from "./Modal";
import { openModal } from "../features/modal";

const Cart = () => {
  let { cartItems, totalAmount } = useSelector((store) => store.cart);
  let { isModalOpen } = useSelector((store)=> store.modal)
  let dispatch = useDispatch();

  useEffect(() => {
    cartItems.length>0 && dispatch(calculateTotalAmount());
  }, [cartItems]);

  if (cartItems.length < 1) {
    return (
      <>
        <div className="min-h-full">
          <h2 className="text-3xl font-extrabold text-slate-100 text-center pt-10">
            Your cart is Empty !
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full min-h-full relative">
        { isModalOpen && <Modal/>}
        <h2 className="font-bold text-center md:text-6xl text-4xl md:py-12 py-8 text-slate-100">
          My Cart
        </h2>
        <div className="bg-slate-200 px-4 rounded-lg lg:max-w-[60%] mx-auto ">
          {cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
          <hr className="bg-black h-[3px] my-2" />
          <div className="font-bold text-2xl text-zinc-950 py-4 px-4 flex ">
            <div>
              <span>Total :</span>
            </div>
            <div className="ml-auto">
              <span>{`$ ${totalAmount}`}</span>
            </div>
          </div>
          <div className="text-center py-3 ">
            <button
              className="md:text-2xl text-lg uppercase md:font-semibold font-bold text-zinc-900 underline"
              onClick={() => {dispatch(openModal())}}
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
