import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/products";
import Card from "../card/Card";

const HomePage = () => {
  let dispatch = useDispatch();
  let {products, isLoading} = useSelector((store) => store.products);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, []);
  console.log(products);
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center">
        <h1 className="text-slate-100 text-3xl font-extrabold mt-20">
          Loading....
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center content-center">
        {products.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
