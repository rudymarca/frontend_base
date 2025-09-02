"use client"
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

interface LoginValues {
  name: string
  email: string
  password: string
  confirm: string
}

const SignupForm = () => {
  //? HOOKS
  const router = useRouter()
  //? STATE
  //? FUNCTION
  const onFinish = async (values: LoginValues) => {
    const res = await axios.post("/api/auth/register", {
      ...values,
    })
    console.log(res)
    if (res.status === 201) {
      const result = await signIn("credentials", {
        redirect: false,
        email: res.data.email,
        password: values.password,
      })
      if (!result?.ok) {
        console.log("res", result?.error)
        return null
      }
      router.push("/dashboard")
    }
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
        <Input prefix={<MailOutlined />} placeholder="Email" />
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
