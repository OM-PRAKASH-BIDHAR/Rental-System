// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cyan-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to Car & Bike Rental
      </h1>
      <p className="text-center mb-6 text-gray-700">
        Book your ride easily and manage rentals online!
      </p>
      <div className="flex gap-4">
        <Link
          to="/vehicles"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Explore Vehicles
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
