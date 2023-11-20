import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

// Define the type for the props
interface ErrorMessageProps {}

const { Header: AntHeader } = Layout;

const items1 = [
  {
    key: "/gold",
    label: <Link to="/gold">Gold</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "/sum-gold",
    label: "This is parent menu",
    icon: <UserOutlined />,
    children: [
      {
        key: "/menu-1",
        label: <Link to="/menu-1">Sub Menu 1</Link>,
        icon: <UserOutlined />,
      },
      {
        key: "/menu-2",
        label: <Link to="/menu-2">Sub Menu 2</Link>,
        icon: <UserOutlined />,
      },
    ],
  },
  {
    key: "/antd",
    label: <Link to="/antd">antd</Link>,
    icon: <UserOutlined />,
  },
];

const Header: React.FC<ErrorMessageProps> = () => {
  return (
    <AntHeader style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </AntHeader>
  );
};

export default Header;
