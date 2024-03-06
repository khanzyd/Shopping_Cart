import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { removeItem, increaseAmount, decreaseAmount } from "../features/cart";

const CartItem = ({ cartItem }) => {
  let dispatch = useDispatch();
  let { id, images, price, title, amount } = cartItem;
  return (
    <div className="flex items-center px-3 py-5 ">
      <div className="md:w-36 sm:w-28 w-24 object-cover select-none">
        <img src={images[0]} alt="title" />
      </div>
      <div className="ml-10 text-zinc-900 md:max-w-auto sm:max-w-[50%] max-w-[40%] ">
        <h4 className="font-bold md:text-3xl text-xl ">{title}</h4>
        <p className="font-medium md:text-2xl text-lg select-none">{`$ ${price}`}</p>
        <button
          className="font-medium md:text-2xl text-lg mt-2 select-none text-red-600"
          onClick={() => {
            dispatch(removeItem({ id }));
          }}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col text-zinc-950 text-2xl ml-auto">
        <div
          className="px-3 py-1"
          onClick={() => {
            dispatch(increaseAmount({ id }));
          }}
        >
          <SlArrowUp className="font-extrabold" />
        </div>
        <p className="text-center font-bold select-none">{amount}</p>
        <div
          className="px-3 py-1"
          onClick={() => {
            dispatch(decreaseAmount({ id }));
          }}
        >
          <SlArrowDown className="font-extrabold" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
