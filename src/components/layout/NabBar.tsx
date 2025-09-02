"use client"
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons"
import {
  Dropdown,
  Flex,
  Layout,
  Menu,
  MenuProps,
  Space,
  Typography,
} from "antd"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

const { Header } = Layout

const NabBar = () => {
  const { data: session } = useSession()

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Perfil",
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: "Configuracion",
      icon: <SettingOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: "Salir",
      icon: <LogoutOutlined />,
      onClick: () => signOut(),
    },
  ]
  let itemMenu: MenuProps['items'] = [
    { key: "1", label: <Link href="/auth/login">Login</Link> },
    { key: "2", label: <Link href="/auth/register">Register</Link> },
  ]
  if (session) {
    itemMenu = [{ key: "3", label: <Link href="/dashboard">Dashboard</Link> }]
  }

  return (
    <Header>
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Typography.Title
            level={2}
            style={{ color: "white" }}
            className="text-2xl"
          >
            Base
          </Typography.Title>
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          // items={[
          //   { key: "1", label: <Link href="/auth/login">Login</Link> },
          //   { key: "2", label: <Link href="/auth/register">Register</Link> },
          //   { key: "3", label: <Link href="/dashboard">Dashboard</Link> },
          // ]}
          items={itemMenu} 
        />

        {session && (
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {session.user?.name}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        )}
      </Flex>
    </Header>
  )
}
export default NabBar
