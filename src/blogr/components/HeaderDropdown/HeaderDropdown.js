import "./HeaderDropdown.scss";

import React, { useState } from "react";

const HeaderDropdown = ({ menuItem }) => {
   const [active, setActive] = useState(false);

   return (
      <div
         className="header-dropdown"
         onFocus={() => setActive(true)}
         onBlur={() => setActive(false)}
         onMouseEnter={() => setActive(true)}
         onMouseLeave={() => setActive(false)}
      >
         <span className="header-dropdown__title">{menuItem.name}</span>
         <img
            src={require("../../images/icon-arrow-light.svg").default}
            alt=""
            className={
               active
                  ? "header-dropdown__arrow header-dropdown__arrow--active"
                  : "header-dropdown__arrow"
            }
         />

         <ul
            className={
               active
                  ? "header-dropdown__list"
                  : "header-dropdown__list header-dropdown__list--hidden"
            }
         >
            {menuItem.waypoints.map((item, index) => (
               <li className="header-dropdown__list-item" key={index}>
                  <a href={item.link}>{item.name}</a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default HeaderDropdown;
