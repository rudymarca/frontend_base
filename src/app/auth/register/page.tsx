"use client"
import SignupForm from "@/components/auth/SignupForm"
import { Flex, Grid, Typography } from "antd"
import Link from "next/link"

const RegisterPage = () => {
  const screens = Grid.useBreakpoint()
  return (
    <Flex
      justify="center"
      align={screens.xs ? "start" : "center"}
      style={{
        height: "100vh",
        width: "100%",
        paddingTop: screens.xs ? "50px" : "0",
      }}
    >
      <Flex vertical gap="large" style={{ width: 300 }}>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Registrar
        </Typography.Title>
        <SignupForm />
        <Flex justify="space-between">
          <Typography.Text className="text-center">
            Ya tienes cuenta?
          </Typography.Text>
          <Link className="ml-2" href="/auth/login">
            Iniciar
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default RegisterPage
