import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20"> {/* padding to avoid navbar overlap */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rent Cars & Bikes Easily
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Affordable, reliable, and fast rentals at your fingertips.
          </p>
          <Link
            to="/vehicles"
            className="px-6 py-3 bg-white text-cyan-700 font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Browse Vehicles
          </Link>
        </div>
      </section>

      {/* Vehicle Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Vehicles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Vehicle Cards */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549921296-3b4a4f089a3e"
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Sedan Car</h3>
              <p className="text-gray-600">₹1500/day</p>
              <Link
                to="/vehicles"
                className="mt-2 inline-block px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              >
                Rent Now
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600682362302-3f58b4c1d21a"
              alt="Bike"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Sport Bike</h3>
              <p className="text-gray-600">₹800/day</p>
              <Link
                to="/vehicles"
                className="mt-2 inline-block px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              >
                Rent Now
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617814074234-4e44f9465d98"
              alt="SUV"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">SUV</h3>
              <p className="text-gray-600">₹2500/day</p>
              <Link
                to="/vehicles"
                className="mt-2 inline-block px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              >
                Rent Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose RentalX?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                From economy cars to luxury SUVs and bikes, we have it all.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Best prices with no hidden charges. Pay only what you see.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is available round the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
