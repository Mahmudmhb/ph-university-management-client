import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";

import { AdminPath } from "./Admin.route";
import { routeGenerator } from "../utils/routesGenarators";
import { FacultyPaths } from "./Faculty.route";
import { StudentPaths } from "./Student.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(AdminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(FacultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(StudentPaths),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
