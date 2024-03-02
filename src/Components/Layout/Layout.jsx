import React from 'react'
import Navbar from '../navbar/Navbar'
import HomePage from '../homePage/HomePage'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
}

export default Layout