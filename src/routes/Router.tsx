import { Routes, Route } from "react-router-dom";
import { Layout, theme } from "antd";
import { GoldForm, AntComponents } from "../components";

const { Content } = Layout;

export default function Router() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
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
  );
}
