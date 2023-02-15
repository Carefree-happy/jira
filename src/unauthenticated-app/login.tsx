import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
const Item = Form.Item;
export const LoginScreen = () => {
  const { login } = useAuth();

  // HTMLFormElement extends Element
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
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
        <Input type="password" id={"password"} />
      </Item>
      <Item>
        <Button htmlType={"submit"} type={"primary"}>
          登录
        </Button>
      </Item>
    </Form>
  );
};
