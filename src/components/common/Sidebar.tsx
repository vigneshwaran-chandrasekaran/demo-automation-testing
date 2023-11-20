import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";

// Define the type for the props
interface ErrorMessageProps {}

const { Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `sub1`,
    icon: <LaptopOutlined />,
    label: `Forms`,
    children: [
      {
        key: "/menu-1",
        label: <Link to="/antd">ANTD</Link>,
        icon: <UserOutlined />,
      },
      {
        key: "/menu-2",
        label: <Link to="/gold">Gold</Link>,
        icon: <NotificationOutlined />,
      },
    ],
  },
];

const Sidebar: React.FC<ErrorMessageProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default Sidebar;
