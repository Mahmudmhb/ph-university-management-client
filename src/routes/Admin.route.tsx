import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};
type TSideBar = {
  key: string;
  label: ReactNode;
  children?: TSideBar[];
};
const AdminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

export const SidebarPath = AdminPath.reduce((arr: TSideBar[], item) => {
  if (item.path && item.name) {
    arr.push({
      key: item.path,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    arr.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return arr;
}, []);
export const AdminRoute = AdminPath.reduce((arr: TRoute[], item) => {
  if (item.path && item.element) {
    arr.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      arr.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return arr;
}, []);
// export const AdminPath = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];
