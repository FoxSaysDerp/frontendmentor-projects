import "./Header.scss";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import menu from "../../constant/menu.json";

import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

const Header = ({ headerState }) => {
   const [headerVisible, setHeaderVisible] = useState(headerState);

   useEffect(() => {
      setHeaderVisible(headerState);
   }, [headerState]);

   return (
      <>
         <header className={classNames("", { scrolled: !headerVisible })}>
            <nav className="container header">
               <div className="header__nav header__nav--left">
                  <a href="/" style={{ padding: "8px" }}>
                     <img
                        src={require("../../images/logo.svg").default}
                        alt="Blogr"
                        className="header__logo"
                     />
                  </a>
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
               </div>
               <div className="header__nav header__nav--right">
                  <button className="btn btn--basic header__btn">Login</button>
                  <button className="btn header__btn">Sign up</button>
               </div>
            </nav>
         </header>
      </>
   );
};

export default Header;
