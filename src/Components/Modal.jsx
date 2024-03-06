import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal";
import { clearCart } from "../features/cart";

const Modal = () => {
  let dispatch = useDispatch();
  return (
    <>
      <div className="absolute flex justify-center items-center w-full min-h-full bg-opacity-75 bg-zinc-900 backdrop-blur-md">
        <div className="modal bg-sky-100 md:max-w-[40%] w-[90%] rounded-lg px-4 py-6 font-bold  animate-reveal">
          <p className="text-center mb-5 text-xl">
            Do you want to clear the cart
          </p>
          <div className="flex justify-center items-center gap-[20%] text-xl">
            <button
              className="border-2 border-green-700  text-green-700 rounded-full px-4 py-1"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              className="border-2 border-red-700 text-red-700 rounded-full px-4 py-1"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
