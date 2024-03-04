import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ContentWrapper from "./ContentWrapper";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
};

export default Layout;
