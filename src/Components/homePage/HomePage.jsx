import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const HomePage = () => {
  let [cartItems, setCartItems] = useState(null);
  console.log(cartItems);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data)=>{ 
        setCartItems(data)
      })
      
  }, []);

  if(!cartItems){
    return <h1>Loading....</h1>
  }

  return (
    <>
      <div className="flex flex-wrap">
        {cartItems?.products.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </>
  );

};

export default HomePage;
