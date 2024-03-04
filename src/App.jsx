import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Layout from "./Components/Layout";
import Cart from "./Components/Cart";

function App() {
  const allRoutes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<Cart />}/>
    </Route>
  );

  const router = createBrowserRouter(allRoutes);

  return (
    <>
      <div className="bg-zinc-800">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
