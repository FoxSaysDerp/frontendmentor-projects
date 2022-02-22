import "./styles/blogr.scss";
import "./styles/page.scss";

import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Layout from "../blogr/components/Layout";
import { Waypoint } from "react-waypoint";
import Particles from "react-tsparticles";
import { Fade } from "react-awesome-reveal";
import { MobileView, BrowserView } from "react-device-detect";

import * as particlesOptions from "./constant/particles.json";

const Blogr = () => {
   const [headerVisible, setHeaderVisible] = useState(true);

   // Parallax effects
   useEffect(() => {
      const heroImg = document.getElementById("heroBg");

      window.addEventListener("scroll", () => {
         const value = window.scrollY;

         heroImg.style.right = -100 - value * 0.5 + "px";
      });
   });

   return (
      <Layout headerState={headerVisible}>
         <Meta title="Blogr" description="Blogr - blog" />
         <Particles
            id="tsparticles"
            options={particlesOptions}
            style={{ position: "relative", zIndex: 99999 }}
         />
         <section className="hero">
            <div className="container hero__container">
               <div className="hero-content">
                  <Waypoint
                     onEnter={() => setHeaderVisible(true)}
                     onLeave={() => setHeaderVisible(false)}
                  />
                  <h1>A modern publishing platform</h1>
                  <p>Grow you audience</p>
                  <div className="hero-content__btn-group">
                     <button className="btn">Start for Free</button>
                     <button className="btn btn--outline">Learn More</button>
                  </div>
               </div>
            </div>
            <img
               src={require("./images/bg-pattern-intro.svg").default}
               alt=""
               className="hero__bg"
               id="heroBg"
            />
         </section>
         <section className="intro">
            <div className="container container--no-max">
               <h2 className="intro__title">Designed for the future</h2>

               <div className="row">
                  <div className="col-lg-4 offset-lg-1">
                     <div className="intro__content">
                        <h3>Introducing an extensible editor</h3>
                        <p>
                           Blogr features an exceedingly intuitive interface
                           which lets you focus on one thing: creating content.
                           The editor supports management of multiple blogs and
                           allows easy manipulation of embeds such as images,
                           vidoes and Markdown. Extensibility with plugins and
                           themes provide easy ways to add functionality or
                           change the looks of a blog.
                        </p>
                        <h3>Robust content management</h3>
                        <p>
                           Flexible content management enables users to easily
                           move through posts. Increase the usability of your
                           blog by adding customized categories, sections,
                           format or flow. With this functionality, you're in
                           full control.
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                     <BrowserView>
                        <Fade
                           direction="right"
                           fraction={0.3}
                           duration={2000}
                           triggerOnce={true}
                        >
                           <img
                              src={
                                 require("./images/illustration-editor-desktop.svg")
                                    .default
                              }
                              alt=""
                           />
                        </Fade>
                     </BrowserView>
                     <MobileView>
                        <Fade
                           direction="down"
                           fraction={0.3}
                           duration={2000}
                           triggerOnce={true}
                        >
                           <img
                              src={
                                 require("./images/illustration-editor-mobile.svg")
                                    .default
                              }
                              alt=""
                           />
                        </Fade>
                     </MobileView>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Blogr;
