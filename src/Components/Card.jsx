import React from "react";
import { addItem } from "../features/cart";
import { useDispatch } from "react-redux";

const Card = ({id, title, images, price }) => {
  let dispatch = useDispatch();
  return (
    <div className="md:mx-7 mx-4 md:my-5 my-2 p-4 md:w-64 w-44 min-h-64 flex flex-col justify-center items-center border-2 rounded-lg bg-slate-200 border-black">
      <div className="md:h-60 md:w-52 h-40 w-42">
        <img
          src={images[0]}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="my-5 w-full">
        <h2 className="font-bold text-lg text-zinc-900">{title}</h2>
        <p className="font-extrabold text-lg text-red-700">{`$${price}`}</p>
      </div>
      <button
        className="font-bold border-2 border-zinc-900 w-full rounded-full hover:bg-zinc-900 hover:text-slate-100"
        onClick={() => {
          dispatch(addItem({id, title, images, price}));
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default Card;
