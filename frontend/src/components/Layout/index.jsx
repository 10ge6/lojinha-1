import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyle from "../../styles/Global";
import Height from "./styles";

const Layout = () => {
  return (
    <Height>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </Height>
  );
};

export default Layout;
