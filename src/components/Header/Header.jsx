import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 border border-black">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Dashboard</a></li>
            <li><a>Contact</a></li>
            <li></li>
            <li><a>Items</a></li>
            <li></li>
            <li><a>Stock In</a></li>
            <li><a>Stock Out</a></li>
            <li><a>Invoice</a></li>
            <li></li>
            <li><a>Payable</a></li>
            <li><a>Receivable</a></li>
            <li><a>Reports</a></li>
          </ul>
        </div>
        <img className='w-12' src="src\components\images\Electronic Vehicle Logo.png" alt="" />
      </div>

      <div className="flex-none">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-60 md:w-auto" />
        </div>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src="src\components\images\human.png" alt="" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
