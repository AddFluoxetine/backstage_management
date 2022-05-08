/*
 * @Author: Ue
 * @Date: 2022-03-28 20:39:36
 * @LastEditTime: 2022-05-08 20:50:48
 * @LastEditors: Ue
 * @FilePath: /react-admin-client/src/pages/Admin/index.jsx
 */

import React from "react";
import { Navigate } from "react-router-dom";

import memoryUtils from "../../utils/memoryUtils";

//后台管理的路由组件
export default function Admin() {
  const { user } = memoryUtils;
  if (!user || !user._id) {
    return <Navigate to="/login"/>;
  }else{
    return <div>Hello, {user.username}!</div>;
  }
}
