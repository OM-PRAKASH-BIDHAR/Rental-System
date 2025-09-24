import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    // TODO: Clear token / Redux state
    navigate("/login");
  };

  // Common links for all users
  const commonLinks = [
    { name: "Home", path: "/home" },
    { name: "Vehicles", path: "/vehicles" },
  ];

  // Role-based links
  const roleLinks = [];
  if (isAuthenticated && userRole === "customer") {
    roleLinks.push({ name: "Dashboard", path: "/dashboard" });
  }
  if (isAuthenticated && userRole === "admin") {
    roleLinks.push({ name: "Admin", path: "/admin" });
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/home" className="text-2xl font-bold text-cyan-600">
            RentalX
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {commonLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-cyan-600">
                {link.name}
              </Link>
            ))}
            {roleLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-cyan-600">
                {link.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {commonLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {roleLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
