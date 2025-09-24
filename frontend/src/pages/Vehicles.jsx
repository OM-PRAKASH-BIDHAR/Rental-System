import React, { useState } from "react";

const Vehicles = () => {
  const [filter, setFilter] = useState("all");

  // Dummy vehicle data (replace later with API)
  const vehicles = [
    { id: 1, name: "Sedan Car", type: "car", price: "₹1500/day", img: "https://images.unsplash.com/photo-1549921296-3b4a4f089a3e" },
    { id: 2, name: "Sport Bike", type: "bike", price: "₹800/day", img: "https://images.unsplash.com/photo-1600682362302-3f58b4c1d21a" },
    { id: 3, name: "SUV", type: "car", price: "₹2500/day", img: "https://images.unsplash.com/photo-1617814074234-4e44f9465d98" },
    { id: 4, name: "Cruiser Bike", type: "bike", price: "₹1000/day", img: "https://images.unsplash.com/photo-1605559424843-9d1cffe44546" },
    { id: 5, name: "Luxury Car", type: "car", price: "₹4000/day", img: "https://images.unsplash.com/photo-1605559424973-4b1d9e3e1f6c" },
  ];

  // Filter vehicles based on selection
  const filteredVehicles =
    filter === "all" ? vehicles : vehicles.filter((v) => v.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Available Vehicles</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${
            filter === "all" ? "bg-cyan-600 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("car")}
          className={`px-4 py-2 rounded-full ${
            filter === "car" ? "bg-cyan-600 text-white" : "bg-gray-200"
          }`}
        >
          Cars
        </button>
        <button
          onClick={() => setFilter("bike")}
          className={`px-4 py-2 rounded-full ${
            filter === "bike" ? "bg-cyan-600 text-white" : "bg-gray-200"
          }`}
        >
          Bikes
        </button>
      </div>

      {/* Vehicles Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={vehicle.img}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{vehicle.name}</h3>
              <p className="text-gray-600">{vehicle.price}</p>
              <button className="mt-3 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;