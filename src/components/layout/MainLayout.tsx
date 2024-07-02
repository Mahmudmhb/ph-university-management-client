import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { SidebarPath } from "../../routes/Admin.route";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <div>
            <h1
              style={{
                fontSize: "20px",
                color: "white",
                height: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              ph uni
            </h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={SidebarPath}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
