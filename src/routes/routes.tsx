import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";

import { AdminRoute } from "./Admin.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: AdminRoute,
  },
  {
    path: "/student",
    element: <App />,
    children: AdminRoute,
  },
  {
    path: "/faculty",
    element: <App />,
    children: AdminRoute,
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
