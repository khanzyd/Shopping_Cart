import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { removeItem, increaseAmount, decreaseAmount } from "../features/cart";

const CartItem = ({ cartItem }) => {
  let dispatch = useDispatch();
  let { id, images, price, title, amount } = cartItem;
  return (
    <div className="flex items-center px-3 py-5 ">
      <div className="w-36 object-cover bg-black">
        <img src={images[0]} alt="title" />
      </div>
      <div className="ml-10">
        <h4 className="font-bold text-3xl">{title}</h4>
        <p className="font-medium text-2xl text-zinc-900">{`$ ${price}`}</p>
        <button
          className="font-medium text-3xl mt-2 select-none text-red-600"
          onClick={() => {
            dispatch(removeItem({ id }));
          }}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col text-zinc-950 text-2xl">
        <SlArrowUp
          className="font-extrabold"
          onClick={() => {
            dispatch(increaseAmount({ id }));
          }}
        />
        <p className="text-center font-bold select-none">{amount}</p>
        <SlArrowDown
          className="font-extrabold"
          onClick={() => {
            dispatch(decreaseAmount({ id }));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
