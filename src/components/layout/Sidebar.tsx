import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sideberGenarater";
import { AdminPath } from "../../routes/Admin.route";
import { FacultyPaths } from "../../routes/Faculty.route";
import { StudentPaths } from "../../routes/Student.route";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/AuthSlice";

const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const user = useAppSelector(useCurrentUser);

  let sideberItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sideberItems = sidebarItemGenerator(AdminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideberItems = sidebarItemGenerator(FacultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideberItems = sidebarItemGenerator(StudentPaths, userRole.STUDENT);
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
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
        items={sideberItems}
      />
    </Sider>
  );
};

export default Sidebar;
