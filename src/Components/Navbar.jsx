import React from "react";
import cart from "../assets/shopping-cart.svg";
import { useSelector } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate()
  const { totalItems } = useSelector((store) => store.cart);
  return (
    <div className="w-screen h-20 px-[4%] py-4 bg-sky-300 flex items-center justify-between max-w-full">
      <NavLink to={"/"}>
        <h2 className="font-extrabold text-3xl flex">
          Shopy
          <img src={cart} alt="cart" className="w-8" />
        </h2>
      </NavLink>
      <div
        className="relative"
        onClick={() => {
          navigate("./cart");
        }}
      >
        <img src={cart} alt="cart" className="w-10 invert" />
        <div className="absolute top-[-10%] right-[-30%] bg-slate-100 rounded-full w-7 h-7 p-1 flex justify-center items-center font-semibold text-lg">
          {totalItems}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
