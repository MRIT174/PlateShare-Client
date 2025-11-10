import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/AvailableFoods";

const router = createBrowserRouter([
   {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/Login",
        Component: Login
      },
      {
        path: "/Register",
        Component: Register
      },
      {
        path: "/AvailableFoods",
        Component: AvailableFoods
      },
      {
        path: "/AvailableFoods",
        Component: AvailableFoods
      },
    ],
  },
]);

export default router;