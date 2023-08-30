// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="navbar bg-base-100 border border-black">
      <div className="flex-1">
        <div className="dropdown">
          {/* Button for Mobile View */}
          <button tabIndex={0} className="btn btn-ghost btn-circle md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          {/* List Div (only shown on laptop view) */}
          <ul className={`text-white bg-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${expanded ? 'block' : 'hidden'} md:block`}>
            <li><a className="hover:text-orange-500">Dashboard</a></li>
            <li><a className="hover:text-orange-500">Contact</a></li>
            <li></li>
            <li><a className="hover:text-orange-500">Items</a></li>
            <li></li>
            <li><a className="hover:text-orange-500">Stock In</a></li>
            <li><a className="hover:text-orange-500">Stock Out</a></li>
            <li><a className="hover:text-orange-500">Invoice</a></li>
            <li></li>
            <li><a className="hover:text-orange-500">Payable</a></li>
            <li><a className="hover:text-orange-500">Receivable</a></li>
            <li><a className="hover:text-orange-500">Reports</a></li>
          </ul>
        </div>
        <img className='w-12' src="src\components\images\Electronic Vehicle Logo.png" alt="" />
      </div>

  </div>
  );
};

export default Header;
