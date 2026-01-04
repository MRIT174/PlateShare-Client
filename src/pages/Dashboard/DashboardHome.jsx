// pages/Dashboard/DashboardHome.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 border-r border-gray-200 p-5 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold text-primary mb-6">Dashboard</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-food"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Add Food
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/manage-my-foods"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Manage My Foods
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Profile
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardHome;
