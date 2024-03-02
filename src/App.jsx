import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './Components/homePage/HomePage'
import Layout from "./Components/Layout/Layout"


function App() {

  const allRoutes = createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<HomePage/>}/>
    </Route>
  );

  const router = createBrowserRouter(allRoutes)

  return (
    <>
      <div className='bg-zinc-800'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App
