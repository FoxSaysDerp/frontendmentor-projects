import "./HeaderDropdown.scss";

import React, { useState } from "react";
import classNames from "classnames";

const HeaderDropdown = ({ menuItem, btn, right }) => {
   const [active, setActive] = useState(false);

   return (
      <div
         className={classNames(
            "header-dropdown",
            { "btn header-dropdown--btn": btn },
            { "header-dropdown--right": right }
         )}
         onFocus={() => setActive(true)}
         onBlur={() => setActive(false)}
         onMouseEnter={() => setActive(true)}
         onMouseLeave={() => setActive(false)}
      >
         <span className="header-dropdown__title">{menuItem.name}</span>
         <img
            src={
               btn
                  ? active
                     ? require("../../images/icon-arrow-light.svg").default
                     : require("../../images/icon-arrow-dark.svg").default
                  : require("../../images/icon-arrow-light.svg").default
            }
            alt=""
            className={
               active
                  ? "header-dropdown__arrow header-dropdown__arrow--active"
                  : "header-dropdown__arrow"
            }
         />

         <ul
            className={classNames(
               "header-dropdown__list",
               {
                  "header-dropdown__list--hidden": !active,
               },
               {
                  "header-dropdown__list--right": right,
               }
            )}
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
