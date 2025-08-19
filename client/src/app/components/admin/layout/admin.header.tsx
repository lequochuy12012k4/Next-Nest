'use client';
import { Layout, Menu, theme } from 'antd';
export default function AdminHeader() {
    const { Header, Content, Footer, Sider } = Layout;
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <>
        <Header style={{ padding: 0, backgroundColor: "#ccc" }} />
        </>
    );
}