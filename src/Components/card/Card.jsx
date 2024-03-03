import React from "react";
import { addItem } from "../../features/cart";
import { useDispatch } from "react-redux";

const Card = ({ title, images, price }) => {
  let dispatch = useDispatch()
  return (
    <div className="mx-7 my-5 p-4 w-64 flex flex-col justify-center items-center border-2 rounded-lg bg-slate-200 border-black">
      <div className="h-60 w-52">
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
        onClick={()=>{
          dispatch(addItem())
        }}
      >add to cart</button>
    </div>
  );
};

export default Card;
