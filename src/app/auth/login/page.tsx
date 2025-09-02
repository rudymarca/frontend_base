"use client"
import { FC } from "react"
import { Flex, Typography, Grid } from "antd"
import SigninForm from "@/components/auth/SigninForm"
import Link from "next/link"
// import Link from "next/link"

const LoginPage: FC = () => {
  //? HOOKS
  const screens = Grid.useBreakpoint()
  //? STATE
  //? FUNCTION
  //? EFFECT
  //? RENDER
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
          Iniciar Sesión
        </Typography.Title>
        <SigninForm />
        <Flex justify="space-between">
          <Typography.Text className="text-center">
            No tienes cuenta?
          </Typography.Text>
          <Link className="ml-2" href="/auth/register">
            Registrate
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default LoginPage
