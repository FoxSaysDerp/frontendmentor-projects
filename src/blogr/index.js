import "./styles/blogr.scss";
import "./styles/page.scss";

import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Layout from "../blogr/components/Layout";
import { Waypoint } from "react-waypoint";
import Particles from "react-tsparticles";
import { Fade } from "react-awesome-reveal";
import { MobileView, BrowserView, isMobile } from "react-device-detect";

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
               className="img-fluid hero__bg"
               id="heroBg"
            />
         </section>

         <section className="intro">
            <div className="container container--no-max">
               <h2 className="intro__title">Designed for the future</h2>

               <div className="row">
                  <div className="col-lg-4 offset-lg-1 order-lg-1 order-2">
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
                  <div className="col-lg-6 offset-lg-1 order-lg-12 order-1">
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
                              alt="Blogr UI"
                              className="img-fluid img-center"
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
                              alt="Blogr UI"
                              className="img-fluid img-center"
                           />
                        </Fade>
                     </MobileView>
                  </div>
               </div>
            </div>
         </section>

         <section className="soa">
            <div className="container container--no-max">
               <div className="row">
                  <div className="col-lg-4 offset-lg-1">
                     <div className="soa__content">
                        <Fade
                           direction="left"
                           fraction={0.3}
                           duration={2000}
                           triggerOnce={true}
                        >
                           <img
                              src={
                                 require("./images/illustration-phones.svg")
                                    .default
                              }
                              alt="Blogr on Mobile"
                              className="img-fluid img-center"
                           />
                        </Fade>
                     </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                     <div className="soa__content">
                        <h3>State of the Art Infrastructure</h3>
                        <p>
                           With reliabilit and speed in mind worldwide data
                           centers provide the backbone for ultra-fast
                           connectivity. This ensures your site will load
                           instantly, no matter where your readers are, keeping
                           your site competetive.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="about">
            <div className="container container--no-max">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="about__content">
                        <img
                           src={
                              isMobile
                                 ? require("./images/illustration-laptop-mobile.svg")
                                      .default
                                 : require("./images/illustration-laptop-desktop.svg")
                                      .default
                           }
                           alt="Blogr on Laptop"
                           className="img-fluid img-center"
                        />
                     </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1">
                     <div className="about__content">
                        <h3>Free, open, simple</h3>
                        <p>
                           Blogr is a free and open source application backed by
                           a large community of helpful developers. It supports
                           features such as code syntax highlighting, RSS feeds,
                           social media integration, third-party commenting
                           tools and works seamlessly with Google Analytics. The
                           architecture is clean and is relatively easy to
                           learn.
                        </p>

                        <h3>Powerful tooling</h3>
                        <p>
                           Batteries included. We built a simple and
                           straightforward CLI tool that makes customization and
                           deployment a breeze, but capable of producing even
                           the most complicated sites.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Blogr;
