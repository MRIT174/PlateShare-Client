import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import PrivateRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "AvailableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "AddFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
