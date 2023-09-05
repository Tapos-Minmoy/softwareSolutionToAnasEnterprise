/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import { useUserAuth } from "../../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='flex flex-col md:flex-row justify-around bg-orange-50 h-screen'>
      <div className="flex flex-col justify-center align-center w-full md:w-1/2 p-10">
        <p className="font-sans hover:font-serif text-4xl font-bold cursor-pointer ">Powering Your Journey,</p>
        <p className="font-sans hover:font-serif text-4xl font-bold cursor-pointer ">Empowering Your Drive</p>
        <p className="font-sans hover:font-serif text-4xl font-bold cursor-pointer  text-orange-500">Fueling Excellence,</p>
        <p className="font-sans hover:font-serif text-4xl font-bold cursor-pointer  text-orange-500"> Energizing Futures.</p>
      </div>

      <div>
        <div className="w-full mt-20 md:mt-40 ms-10 md:ms-0 me-0 md:me-52">
          <div className=" max-w-md p-10 bg-black rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-white mb-4">Log in</h1>
            {error && <h1 className="text-2xl font-bold text-white mb-4">{error}</h1>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block font-medium text-white">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-yellow-300"
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
                  className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-yellow-300"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>


              <button
                type="Submit"
                className="w-full py-2 px-4 text-white bg-orange-400 hover:bg-orange-500 rounded focus:ring focus:ring-yellow-300"
              >
                LogIn
              </button>
              <Link to="/forgotPassword" className="text-sm mt-2 text-white hover:underline">
              Forgot Password?
             </Link>
              <p className="text-sm text-white">
                Don't have an account? <Link to="/SignUp" className="font-medium text-orange-300 hover:underline">Create Account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;