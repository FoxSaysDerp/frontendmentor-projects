import "./Footer.scss";

import React from "react";
import menu from "../../constant/menu.json";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container container--no-max">
            <div className="row footer__row">
               <div className="col-lg-2 col-md-12 col-12">
                  <div className="footer__col">
                     <img
                        src={require("../../images/logo.svg").default}
                        alt="Blogr"
                        className="img-fluid "
                     />
                  </div>
               </div>
               {menu.map((item, index) => (
                  <div className="col-lg-2 col-md-4 col-6" key={index}>
                     <div className="footer__col">
                        {item.name}
                        <ul className="footer__list">
                           {item.waypoints.map((item, index) => (
                              <li className="footer__list-item" key={index}>
                                 <a href={item.link}>{item.name}</a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
