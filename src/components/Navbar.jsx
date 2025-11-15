import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider.jsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      setIsDropdownOpen(false);
      alert("You have logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AvailableFoods"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Available Foods
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 border-b border-gray-200 sticky top-0 z-50 px-5 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 mt-3 p-2 shadow rounded-box w-52 z-50"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="text-2xl font-bold text-primary">
          PlateShare
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end space-x-3 relative" ref={dropdownRef}>
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-primary object-cover cursor-pointer"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold cursor-pointer">
                  {user.displayName
                    ? user.displayName.charAt(0).toUpperCase()
                    : "U"}
                </div>
              )}
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-3 w-52 bg-base-100 border border-gray-200 rounded-xl shadow-lg z-9999">
                <li>
                  <Link
                    to="/AddFood"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Add Food
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ManageMyFoods"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Manage My Foods
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn w-full text-left px-4 py-2 text-error hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm bg-primary text-white border-none hover:bg-primary/90"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm bg-secondary text-white border-none hover:bg-secondary/90"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
