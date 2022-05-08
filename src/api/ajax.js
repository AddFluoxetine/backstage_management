/*
 * @Author: Ue
 * @Date: 2022-05-04 17:17:31
 * @LastEditTime: 2022-05-08 17:23:56
 * @LastEditors: Ue
 * @FilePath: /react-admin-client/src/api/ajax.js
 */
import axios from "axios";
import { message } from "antd";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      promise = axios.get(url, {
        params: data,
      });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        message.error("请求出错！请稍后再试！\n" + error.message);
      });
  });
}
