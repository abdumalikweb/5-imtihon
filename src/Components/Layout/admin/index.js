import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  UserSwitchOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../sass/Adminlayout.scss";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            {
              key: "0",
              icon: (
                <Link to="/dashboard">
                  <AppstoreOutlined />
                </Link>
              ),
              label: "Dashboard",
            },
            {
              key: "1",
              icon: (
                <Link to="/users">
                  <UserSwitchOutlined />
                </Link>
              ),
              label: "User",
            },
            {
              key: "2",
              icon: (
                <Link to="/experiences">
                  <VideoCameraOutlined />
                </Link>
              ),
              label: "Experiences",
            },
            {
              key: "3",
              icon: (
                <Link to="/portfolio">
                  <IdcardOutlined />
                </Link>
              ),
              label: "Portfolios",
            },
            {
              key: "4",
              icon: (
                <Link to="/skills">
                  <BookOutlined />
                </Link>
              ),
              label: "Skills",
            },
            {
              key: "5",
              icon: (
                <Link to="/message">
                  <MessageOutlined />
                </Link>
              ),
              label: "Message",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
