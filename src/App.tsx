import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Layout } from "antd";
import { Header, Sidebar } from "./components/common";
import { Router } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "24px 24px 24px" }}>
            <Router />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
