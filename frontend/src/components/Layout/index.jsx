import React from "react";
import { Outlet } from "react-router-dom";

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