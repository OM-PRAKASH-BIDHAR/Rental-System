import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginMode) {
      // ✅ Dummy authentication logic
      if (email === "admin@rental.com" && password === "admin123") {
        navigate("/admin-dashboard"); // redirect admin
      } else if (email === "customer@rental.com" && password === "cust123") {
        navigate("/customer-dashboard"); // redirect customer
      } else {
        alert("Invalid credentials. Try admin@rental.com or customer@rental.com");
      }
    } else {
      alert("Account created successfully! You can now log in.");
      setIsLoginMode(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Tabs */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Sign Up
          </button>

          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />

          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {/* Forget Password */}
          {isLoginMode && (
            <div className="text-right">
              <a href="/forgot-password" className="text-cyan-600 hover:underline">
                Forget Password?
              </a>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            {isLoginMode ? "Login" : "Sign Up"}
          </button>

          {/* Switch */}
          <p className="text-center text-gray-600">
            {isLoginMode ? "Don't have an account? " : "Already have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-cyan-600 hover:underline"
            >
              {isLoginMode ? "Sign Up Now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
