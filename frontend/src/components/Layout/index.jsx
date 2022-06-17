import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../Header';
import Footer from "../Footer";
import GlobalStyle from '../../styles/Global';

const Layout = () => {
    return(
      <div>
        <GlobalStyle/>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    );
}

export default Layout