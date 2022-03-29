/*
 * @Author: Ue
 * @Date: 2022-03-28 13:21:23
 * @LastEditTime: 2022-03-29 18:51:52
 * @LastEditors: Ue
 * @FilePath: /work-space/react-admin-client/src/App.jsx
 */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Login from "./pages/Login";

// 应用的根组件
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
