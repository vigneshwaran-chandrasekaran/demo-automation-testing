import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Breadcrumb, Layout, theme } from "antd";
import { GoldForm, AntComponents } from "./components";
import { Header, Sidebar } from "./components/common";

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home vs</Breadcrumb.Item>
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
    </BrowserRouter>
  );
};

export default App;
