import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-400 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Car & Bike Rental</h1>
        <div className="space-x-6">
          <Link to="/home" className="hover:underline">Dashboard</Link>
          <Link to="/cars" className="hover:underline">Cars</Link>
          <Link to="/bikes" className="hover:underline">Bikes</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/login" className="hover:underline">Logout</Link>
        </div>
      </nav>

      {/* Welcome Section */}
      <header className="p-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Welcome to Car & Bike Rental</h2>
        <p className="text-gray-500 mt-2">Manage your rides, bookings, and rentals with ease.</p>
      </header>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-600">Available Cars</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-600">Available Bikes</h3>
          <p className="text-3xl font-bold text-cyan-600 mt-2">15</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-600">Total Bookings</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-600">Revenue</h3>
          <p className="text-3xl font-bold text-yellow-500 mt-2">₹2,50,000</p>
        </div>
      </div>
    </div>
  );
};

export default Home;