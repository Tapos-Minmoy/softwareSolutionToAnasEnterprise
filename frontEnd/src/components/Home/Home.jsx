// eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = () => {
    return (
        <div className='flex flex-row'>
            <div className="basis-1/4">
            <ul className="text-white font-semibold text-xl bg-black menu menu-sm h-screen  z-[1] p-2 shadow w-52 hidden md:block">
            <li><a className="hover:text-orange-500">Dashboard</a></li>
            <li><a className="hover:text-orange-500">Contact</a></li>
            <li></li>
            <li><a className="hover:text-orange-500">Items</a></li>
            <li></li>
            <li><a className="hover:text-orange-500">Stock In/Purchase </a></li>
            <li><a className="hover:text-orange-500">Stock Out/Sales </a></li>
            <li><a className="hover:text-orange-500">Invoice</a></li>
            <li></li>
            <li><a className="hover:text-orange-500">Payable</a></li>
            <li><a className="hover:text-orange-500">Receivable</a></li>
            <li><a className="hover:text-orange-500">Reports</a></li>
          </ul>
            </div>
        </div>
    );
};

export default Home;