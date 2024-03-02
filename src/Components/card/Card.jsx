import React from "react";

const Card = ({ title, images }) => {
  return (
    <div className="mx-7 my-5 p-4 max-w-64 flex flex-col justify-center items-center border-2 rounded-lg bg-slate-200 border-black">
      <div className="h-60 w-52 bg-slate-500">
        <img
          src={images[0]}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
