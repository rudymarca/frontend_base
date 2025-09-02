"use client"
import { LockOutlined, MailOutlined } from "@ant-design/icons"
import { Button, Form, FormProps, Input } from "antd"

interface LoginValues {
  email: string
  password: string
}

const SigninForm = () => {
  //? HOOKS
  //? STATE
  //? FUNCTION
  const onFinish = (values: LoginValues) => {
    console.log("Login success:", values)
  }
  const onFinishFailed: FormProps<LoginValues>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo)
  }
  //? EFFECT
  //? RENDER
  return (
    <Form
      autoComplete="off"
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item<LoginValues>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Por favor ingresa tu email!" }]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" autoFocus />
      </Form.Item>

      <Form.Item<LoginValues>
        label="Contraseña"
        name="password"
        rules={[
          { required: true, message: "Por favor ingresa tu contraseña!" },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Entrar
        </Button>
      </Form.Item>
    </Form>
  )
}
export default SigninForm
