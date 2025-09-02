"use client"
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import axios from "axios"

interface LoginValues {
  name: string
  email: string
  password: string
  confirm: string
}

const SignupForm = () => {
  //? HOOKS
  //? STATE
  //? FUNCTION
  const onFinish = async (values: LoginValues) => {
    const res = await axios.post("/api/auth/register", {
      ...values,
    })
    console.log(res)
  }
  //? EFFECT
  //? RENDER
  return (
    <Form autoComplete="off" name="login" onFinish={onFinish} layout="vertical">
      <Form.Item<LoginValues>
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Por favor ingresa tu Nombre!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Nombre" autoFocus />
      </Form.Item>
      <Form.Item<LoginValues>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Por favor ingresa tu Email!" }]}
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
      <Form.Item<LoginValues>
        label="Confirmar Contraseña"
        name="confirm"
        rules={[
          { required: true, message: "Por favor ingresa tu contraseña!" },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Confirmar Contraseña"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Registrar
        </Button>
      </Form.Item>
    </Form>
  )
}
export default SignupForm
