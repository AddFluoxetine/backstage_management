/*
 * @Author: Ue
 * @Date: 2022-05-08 21:45:47
 * @LastEditTime: 2022-05-08 23:49:15
 * @LastEditors: Ue
 * @FilePath: /react-admin-client/src/utils/storageUtils.js
 */
import store from "store";

const USER_KEY = "user_key";

const storageUtils = {
  saveUser(user) {
    store.set(USER_KEY, user);
  },

  getUser() {
    return store.get(USER_KEY) || {};
  },

  removeUser() {
    store.remove(USER_KEY);
  },
};

export default storageUtils;
