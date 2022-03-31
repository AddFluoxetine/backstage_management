/*
 * @Author: Ue
 * @Date: 2022-03-28 13:45:50
 * @LastEditTime: 2022-03-30 14:01:34
 * @LastEditors: Ue
 * @FilePath: /work-space/react-admin-client/craco.config.js
 */
const CracoLessPlugin = require("craco-less");

module.exports = {
  // 使用CracoLessPlugin自定义主题颜色
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#282c34",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 使用babel-plugin-import按需引用
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
      ],
    ],
  },
};
