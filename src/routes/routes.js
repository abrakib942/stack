import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashoboard";
import Main from "../layout/main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "users",
      },
      {
        path: "sales",
      },
    ],
  },
]);

export default routes;
