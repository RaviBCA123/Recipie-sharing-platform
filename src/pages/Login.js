import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">Don't have an account? <a href="#" className="text-blue-500">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
