/*
 * @Author: Ue
 * @Date: 2022-03-28 20:37:21
 * @LastEditTime: 2022-04-01 18:44:20
 * @LastEditors: Ue
 * @FilePath: /work-space/react-admin-client/src/pages/Login/index.jsx
 */
import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import logo from "./images/logo.svg";
import "./login.less";

// 登录的路由组件
export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo" />
        <h1>React项目: 后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <Form
          name="normal_login"
          className="login-form"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名！",
              },
              { min: 4, message: "用户名不可少于4位" },
              { max: 12, message: "用户名不可多于16位" },
              {
                validator(_, value) {
                  if (/^[a-zA-Z0-9_]+$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("密码必须是英文、数字或下划线组成")
                  );
                },
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
              { min: 4, message: "密码不可少于4位" },
              { max: 12, message: "密码不可多于16位" },
              {
                validator(_, value) {
                  if (/^[a-zA-Z0-9_]+$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("密码必须是英文、数字或下划线组成")
                  );
                },
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}
