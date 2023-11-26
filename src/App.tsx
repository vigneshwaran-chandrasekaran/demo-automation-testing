import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Header, Sidebar } from "./components/common";
import { Router } from "./routes";

const App: React.FC = () => {
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
            <Router />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
