/*
 * @Author: Ue
 * @Date: 2022-03-28 13:17:51
 * @LastEditTime: 2022-03-31 21:11:56
 * @LastEditors: Ue
 * @FilePath: /work-space/react-admin-client/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
