// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // {username, role: "customer"/"admin"}

  const login = (username, password, role) => {
    // Dummy login logic
    if ((role === "admin" && username === "admin" && password === "admin123") ||
        (role === "customer" && username === "user" && password === "user123")) {
      setUser({ username, role });
      if (role === "admin") navigate("/admin");
      if (role === "customer") navigate("/dashboard");
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
