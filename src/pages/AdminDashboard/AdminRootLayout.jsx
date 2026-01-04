import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminRootLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 border-r border-gray-200 p-5 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold text-primary mb-6">Admin Dashboard</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              to="/admin"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage-users"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage-items"
              className="block px-4 py-2 rounded hover:bg-primary/10"
            >
              Manage Items
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

export default AdminRootLayout;
