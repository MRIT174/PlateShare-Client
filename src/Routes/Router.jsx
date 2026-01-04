import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout.jsx";

// Pages
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AvailableFoods from "../pages/AvailableFoods.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

// User Dashboard
import DashboardHome from "../pages/Dashboard/DashboardHome.jsx";
import AddFood from "../pages/Dashboard/AddFood.jsx";
import ManageMyFoods from "../pages/Dashboard/ManageMyFoods.jsx";
import Profile from "../pages/Dashboard/Profile.jsx";
import MyFoodRequests from "../pages/MyFoodRequests.jsx";
import DashboardLanding from "../pages/Dashboard/DashboardLanding.jsx";

// Admin Dashboard
import AdminRootLayout from "../pages/AdminDashboard/AdminRootLayout.jsx";
import AdminDashboardHome from "../pages/AdminDashboard/DashboardHome.jsx";
import ManageUsers from "../pages/AdminDashboard/ManageUsers.jsx";
import ManageItems from "../pages/AdminDashboard/ManageItems.jsx";

// Route Protection
import PrivateRoute from "../Routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "availablefoods", element: <AvailableFoods /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // User Dashboard
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <DashboardLanding /> },
          { path: "add-food", element: <AddFood /> },
          { path: "manage-my-foods", element: <ManageMyFoods /> },
          { path: "my-requests", element: <MyFoodRequests /> },
          { path: "profile", element: <Profile /> },
        ],
      },

      // Admin Dashboard
      {
        path: "admin",
        element: (
          <PrivateRoute>
            <AdminRootLayout />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <AdminDashboardHome /> },
          { path: "manage-users", element: <ManageUsers /> },
          { path: "manage-items", element: <ManageItems /> },
        ],
      },
    ],
  },
]);

export default router;
