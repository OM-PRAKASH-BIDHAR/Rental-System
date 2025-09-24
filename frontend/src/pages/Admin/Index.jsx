import React from "react";

const AdminDashboard = () => {
  // Dummy vehicles
  const vehicles = [
    { id: 1, name: "Sedan Car", type: "car", price: "₹1500/day" },
    { id: 2, name: "Sport Bike", type: "bike", price: "₹800/day" },
    { id: 3, name: "SUV", type: "car", price: "₹2500/day" },
  ];

  // Dummy bookings
  const bookings = [
    { id: 1, vehicle: "Sedan Car", user: "John Doe", date: "2025-09-15", status: "Completed" },
    { id: 2, vehicle: "Sport Bike", user: "Alice", date: "2025-09-18", status: "Upcoming" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard 🛠️</h1>

      {/* Manage Vehicles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Manage Vehicles</h2>
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Vehicle</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-b hover:bg-gray-50">
                <td className="p-2 border">{v.name}</td>
                <td className="p-2 border">{v.type}</td>
                <td className="p-2 border">{v.price}</td>
                <td className="p-2 border space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Manage Bookings */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Vehicle</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-b hover:bg-gray-50">
                <td className="p-2 border">{b.vehicle}</td>
                <td className="p-2 border">{b.user}</td>
                <td className="p-2 border">{b.date}</td>
                <td
                  className={`p-2 border font-medium ${
                    b.status === "Completed"
                      ? "text-green-600"
                      : b.status === "Upcoming"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {b.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Live Tracking Map */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Live Tracking Map</h2>
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
          {/* Placeholder for Map */}
          Map Component Coming Soon 🗺️
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
