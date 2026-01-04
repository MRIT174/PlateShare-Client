import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users from API
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users"); // replace with your server URL
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // Toggle role (User <-> Admin)
  const handleToggleRole = async (id, currentRole) => {
    const newRole = currentRole === "Admin" ? "User" : "Admin";
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, { role: newRole });
      setUsers(
        users.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        )
      );
    } catch (err) {
      console.error("Error updating role:", err);
    }
  };

  // Block/Unblock user
  const handleToggleActive = async (id, currentStatus) => {
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, { active: !currentStatus });
      setUsers(
        users.map((user) =>
          user._id === id ? { ...user, active: !currentStatus } : user
        )
      );
    } catch (err) {
      console.error("Error updating active status:", err);
    }
  };

  if (loading) return <p className="text-gray-500">Loading users...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <p className="mb-4 text-gray-600">
        Here, admin can view, edit, delete, change role or block/unblock users.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Role</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className={`${!user.active ? "bg-red-50" : "hover:bg-gray-50"}`}
              >
                <td className="py-2 px-4 border-b">{user._id.slice(-6)}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.active ? "Active" : "Blocked"}</td>
                <td className="py-2 px-4 border-b flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleToggleRole(user._id, user.role)}
                  >
                    {user.role === "Admin" ? "Demote" : "Promote"}
                  </button>
                  <button
                    className={`${
                      user.active ? "bg-yellow-500" : "bg-green-500"
                    } text-white px-3 py-1 rounded hover:opacity-80`}
                    onClick={() => handleToggleActive(user._id, user.active)}
                  >
                    {user.active ? "Block" : "Unblock"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
