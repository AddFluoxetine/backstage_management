/*
 * @Author: Ue
 * @Date: 2022-03-28 13:17:51
 * @LastEditTime: 2022-05-08 23:31:14
 * @LastEditors: Ue
 * @FilePath: /react-admin-client/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

const user = storageUtils.getUser();
memoryUtils.user = user;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
