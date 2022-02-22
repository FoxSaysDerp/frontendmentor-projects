import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import * as menu from "../constant/menu.json";

const Layout = ({ children, headerState }) => {
   const headerProps = {
      ...menu,
      headerState,
   };
   return (
      <>
         <Header {...headerProps} />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
