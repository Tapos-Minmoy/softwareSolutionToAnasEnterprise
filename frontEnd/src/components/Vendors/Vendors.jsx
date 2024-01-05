// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-router-dom';

const Vendors = ({ selectedComponent, setSelectedComponent  }) => {
    const handleComponentClick = (componentName) => {
      setSelectedComponent(componentName);
    };
    return (
       <div>
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">Inventory Adjustments</a>
  </div>
  <div className="navbar-end" onClick={() => handleComponentClick('AddNewVendor')}>
    <a className="btn">+NEW</a>
  </div>
</div>

        {/* ......?table............ */}
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Date</th>
        <th>Reason</th>
        <th>Description</th>
        <th>Status</th>
        <th>Reference Number</th>
        <th>Created by</th>
        <th>Created Time</th>
        <th>Last Modified By</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
       </div>
    );
};

export default Vendors;