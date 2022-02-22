import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, headerState }) => {
   return (
      <>
         <Header headerState={headerState} />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
