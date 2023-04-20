import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TOKEN } from "../../../const";
import { adminRoutes } from "../../../const/menu";
import "../../../sass/Adminlayout.scss";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

const logout =()=>{
  localStorage.removeItem(TOKEN);
  window.location.href = "/";
};



  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
...adminRoutes.map((menu, i)=>({
  key:i,
 
  icon:<Link to={"/"+ menu.url}>{menu.icon}</Link>,
  label:menu.label,

})),
            {
              icon: <Button onClick={logout} danger type="primary" icon={<LogoutOutlined />}>Logout</Button>,
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
