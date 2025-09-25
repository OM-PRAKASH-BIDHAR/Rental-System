import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole"); // clear login role
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Customer Dashboard</h1>
          <nav className="space-x-6">
            <Link to="/home" className="hover:underline">Home</Link>
            <Link to="/vehicles" className="hover:underline">Vehicles</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Your Active Bookings</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">📅 You don’t have any active bookings yet.</p>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
