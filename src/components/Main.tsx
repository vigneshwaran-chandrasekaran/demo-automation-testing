import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Routes, Route, Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { GoldForm, AntComponents } from "../components";
import { Header } from "../components/common";

const { Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `sub1`,
    icon: <LaptopOutlined />,
    label: `subnav`,
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

const Main: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Main</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route index element={<GoldForm />} />
              <Route path="gold" element={<GoldForm />} />
              <Route path="antd" element={<AntComponents />} />
              <Route path="*" element={<GoldForm />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
