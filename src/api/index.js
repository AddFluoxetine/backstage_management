/*
 * @Author: Ue
 * @Date: 2022-05-04 18:37:21
 * @LastEditTime: 2022-05-04 19:20:06
 * @LastEditors: Ue
 * @FilePath: /react-admin-client/src/api/index.js
 */
import ajax from "./ajax";

// 登录
export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");

// 添加用户
export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");
