// src/components/ForgetPassword.jsx
import React from "react";

const ForgetPassword = () => {
  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      {/* Header Title */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">Forget Password</h2>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
        />

        <button className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
          Reset Password
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Remember your password?{" "}
        <a href="/login" className="text-cyan-600 hover:underline">
          Back to Login
        </a>
      </p>
    </div>
  );
};

export default ForgetPassword;
