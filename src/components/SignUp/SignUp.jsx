/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const SignUp = () => {
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
          <h1 className="text-2xl font-bold text-white mb-4">Sign Up</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium text-white">Your Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-500 rounded focus:ring focus:ring-yellow-300"
                placeholder="name@company.com"
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
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-full h-4 border border-gray-500 rounded bg-black focus:ring-3 focus:ring-yellow-300"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-white">
                  I accept the <a href="#" className="font-medium text-orange-300 hover:underline">Terms and Conditions</a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-orange-400 hover:bg-orange-500 rounded focus:ring focus:ring-yellow-300"
            >
              Create an account
            </button>
            <p className="text-sm text-white">
              Already have an account? <Link to="/login" className="font-medium text-orange-300 hover:underline">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SignUp;