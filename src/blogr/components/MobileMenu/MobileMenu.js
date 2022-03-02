import "./MobileMenu.scss";

import React, { useState } from "react";
import classNames from "classnames";

import MobileSubmenu from "../MobileSubmenu/MobileSubmenu";

import menu from "../../constant/menu.json";

const MobileMenu = ({ headerVisible }) => {
   const [active, setActive] = useState(false);
   const [activeSubmenu, setActiveSubmenu] = useState("");
   return (
      <nav className="mobile-menu">
         <button
            className="mobile-menu__btn"
            onClick={() => setActive(!active)}
         >
            <img
               src={
                  active
                     ? require("../../images/icon-close.svg").default
                     : require("../../images/icon-hamburger.svg").default
               }
               alt=""
               className="img-fluid "
            />
         </button>
         {active && (
            <div
               className={classNames("mobile-menu__window", {
                  "mobile-menu__window--lower": headerVisible,
               })}
            >
               {menu.map((item, index) => {
                  return (
                     <MobileSubmenu
                        key={index}
                        name={item.name}
                        items={item.waypoints}
                        active={activeSubmenu === item.name ? true : false}
                        setActive={setActiveSubmenu}
                     />
                  );
               })}
               <div className="mobile-menu__login">
                  <span className="mobile-menu__link">Login</span>
                  <button className="btn btn--gradient">Sign up</button>
               </div>
            </div>
         )}
      </nav>
   );
};

export default MobileMenu;
