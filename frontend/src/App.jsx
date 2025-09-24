import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/Admin/Index";

const AppContent = () => {
  const location = useLocation();

  // Dummy auth (replace later)
  const isAuthenticated = true;      // true / false
  const userRole = "admin";          // "customer" | "admin"

  // Hide navbar on login / forget-password
  const hideNavbar = ["/login", "/forget-password"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNavbar && <Navbar isAuthenticated={isAuthenticated} userRole={userRole} />}

      <div className={`${!hideNavbar ? "pt-16" : ""}`}>
        <Routes>
          {/* Redirect root */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Protected Customer Dashboard */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated && userRole === "customer" ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Protected Admin Dashboard */}
          <Route
            path="/admin"
            element={
              isAuthenticated && userRole === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
