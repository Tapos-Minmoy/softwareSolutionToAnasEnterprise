/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import { useUserAuth } from "../../context/UserAuthContext";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirnm, setPasswordConfirnm] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      if(password!==passwordConfirnm){
        return setError("Password did not match!")
      }
      try {
        await signUp(email, password);
        navigate("/login");
      } catch (err) {
        setError(err.message);
      }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white mb-4">Sign UP</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-medium text-white">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-orange-300"
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
              <label htmlFor="confirm-password" className="block font-medium text-white">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-yellow-300"
                placeholder="••••••••"
                onChange={(e) => setPasswordConfirnm(e.target.value)}
                required
              />
            </div>
          <div className="flex justify-between">
            <button type="submit"
              className="w-full py-2 px-4 text-white bg-orange-400 hover:bg-orange-500 rounded focus:ring focus:ring-orange-300"
            >
              Sign UP
            </button>
           </div>


          <p className="text-sm text-white">
            Already have an accoun? <Link to="/login" className="font-medium hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;