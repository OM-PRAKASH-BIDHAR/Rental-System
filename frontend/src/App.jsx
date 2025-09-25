import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />

        {/* Customer Dashboard */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Optional pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />

        {/* Catch all → redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
