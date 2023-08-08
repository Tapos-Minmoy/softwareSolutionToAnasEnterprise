/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-200">
      <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white mb-4">Log In</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-white">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-orange-300"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-white">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-orange-300"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-orange-400 hover:bg-orange-500 rounded focus:ring focus:ring-orange-300"
          >
            Log In
          </button>
          <p className="text-sm text-white">
            Don't have an account? <Link to='/signUp' className="font-medium hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default Login;