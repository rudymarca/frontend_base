"use client"
import { LockOutlined, MailOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

interface LoginValues {
  email: string
  password: string
}

const SigninForm = () => {
  //? HOOKS
  const router = useRouter()
  //? STATE
  //? FUNCTION
  const onFinish = async (values: LoginValues) => {
    // const res = await axios.post("/api/auth/login", {
    //   ...values,
    // })
    // console.log(res)
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    })
    if (!res?.ok) {
      console.log("res", res)
      return null
    }
    router.push("/dashboard")
  }
  //? EFFECT
  //? RENDER
  return (
    <Form autoComplete="off" name="login" onFinish={onFinish} layout="vertical">
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
