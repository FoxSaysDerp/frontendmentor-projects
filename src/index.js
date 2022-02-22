import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Blogr from "./blogr/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/bootstrap/bootstrap-grid.scss";
import "./styles/normalize.scss";

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blogr" element={<Blogr />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
