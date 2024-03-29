import React from "react";
import { Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import { LongButton } from "unauthenticated-app";

const Item = Form.Item;

export const RegisterScreen = () => {
  const { register } = useAuth();

  // HTMLFormElement extends Element
  const handleSubmit = (user: { username: string; password: string }) => {
    register(user);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Item>
      <Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Item>
      <Item>
        <LongButton htmlType={"submit"}>注册</LongButton>
      </Item>
    </Form>
  );
};
