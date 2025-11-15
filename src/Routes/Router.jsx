import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/AvailableFoods.jsx";
import AddFood from "../pages/AddFood";
import PrivateRoute from "../Routes/PrivateRoute";
import MyFoodRequests from "../pages/MyFoodRequests.jsx";
import ManageMyFoods from "../pages/ManageMyFoods.jsx";
import FoodDetails from "../pages/FoodDetails.jsx";

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
      {
        path: "MyFoodRequests",
        element: (
          <PrivateRoute>
            <MyFoodRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "ManageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "FoodDetails/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
