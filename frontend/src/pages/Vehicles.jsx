// src/pages/Vehicles.jsx
import React from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const vehicleList = [
    { id: 1, type: "Car", name: "Toyota Corolla" },
    { id: 2, type: "Bike", name: "Yamaha R15" },
    { id: 3, type: "Car", name: "Honda Civic" },
    { id: 4, type: "Bike", name: "KTM Duke" },
  ];

  return (
    <div className="min-h-screen bg-cyan-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicleList.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{vehicle.name}</h2>
            <p className="text-gray-600">{vehicle.type}</p>
            <Link
              to="/dashboard"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
