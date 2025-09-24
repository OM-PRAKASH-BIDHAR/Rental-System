import React from "react";

const Dashboard = () => {
  // Dummy bookings (replace with API later)
  const bookings = [
    { id: 1, vehicle: "Sedan Car", date: "2025-09-15", status: "Completed" },
    { id: 2, vehicle: "Sport Bike", date: "2025-09-18", status: "Upcoming" },
    { id: 3, vehicle: "SUV", date: "2025-09-20", status: "Cancelled" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Welcome Back</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Bookings Section */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Vehicle</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 border">{booking.vehicle}</td>
                  <td className="p-2 border">{booking.date}</td>
                  <td
                    className={`p-2 border font-medium ${
                      booking.status === "Completed"
                        ? "text-green-600"
                        : booking.status === "Upcoming"
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <div className="text-center">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
          <button className="mt-6 w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
