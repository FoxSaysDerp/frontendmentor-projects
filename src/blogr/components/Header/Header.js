import "./Header.scss";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { BrowserView, isMobile } from "react-device-detect";
import menu from "../../constant/menu.json";

import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = ({ headerState }) => {
   const [headerVisible, setHeaderVisible] = useState(headerState);

   useEffect(() => {
      setHeaderVisible(headerState);
   }, [headerState]);

   const tabletLogin = {
      name: "Login",
      waypoints: [
         {
            name: "Login",
            link: "#",
         },
         {
            name: "Sign up",
            link: "#",
         },
      ],
   };
   return (
      <>
         <header className={classNames("", { scrolled: !headerVisible })}>
            <nav className="container header">
               <div className="header__nav header__nav--left">
                  <a
                     href="/"
                     style={{ padding: "8px" }}
                     className="header__logo"
                  >
                     <img
                        src={require("../../images/logo.svg").default}
                        alt="Blogr"
                        className="img-fluid "
                     />
                  </a>
                  <BrowserView>
                     <ul className="header__nav-links">
                        {menu.map((item, index) => (
                           <li
                              className="header__nav-link"
                              key={index}
                              tabIndex={index + 1}
                           >
                              <HeaderDropdown menuItem={item} />
                           </li>
                        ))}
                     </ul>
                  </BrowserView>
               </div>
               <BrowserView>
                  <div className="header__nav header__nav--right">
                     <button className="btn btn--basic header__btn">
                        Login
                     </button>
                     <button className="btn header__btn">Sign up</button>
                  </div>
                  <div className="header__nav header__nav--login-btn">
                     <HeaderDropdown right btn menuItem={tabletLogin} />
                  </div>
               </BrowserView>
               {isMobile && <MobileMenu headerVisible={headerVisible} />}
            </nav>
         </header>
      </>
   );
};

export default Header;
