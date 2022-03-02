import "./MobileSubmenu.scss";

import React from "react";

const MobileSubmenu = ({ name, items, active, setActive }) => {
   return (
      <div className="mobile-submenu">
         <span
            className={
               active
                  ? "mobile-submenu__title mobile-submenu__title--active"
                  : "mobile-submenu__title"
            }
            onClick={() => {
               if (!active) {
                  setActive(name);
               } else {
                  setActive("");
               }
            }}
         >
            {name}
            <img
               src={require("../../images/icon-arrow-dark.svg").default}
               alt=""
               className={
                  active
                     ? "img-fluid mobile-submenu__arrow mobile-submenu__arrow--active"
                     : "img-fluid mobile-submenu__arrow"
               }
            />
         </span>
         {active && (
            <ul className="mobile-submenu__list">
               {items.map((item, index) => {
                  return (
                     <li className="mobile-submenu__list-item" key={index}>
                        <a href={item.link}>{item.name}</a>
                     </li>
                  );
               })}
            </ul>
         )}
      </div>
   );
};

export default MobileSubmenu;
