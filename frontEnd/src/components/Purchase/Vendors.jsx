// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-router-dom';

const Vendors = ({ selectedComponent, setSelectedComponent  }) => {
    const handleComponentClick = (componentName) => {
      setSelectedComponent(componentName);
      window.location.hash = componentName;
    };
    return (
        <div>
          <div className="navbar bg-base-100 ">
            <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Vendors</a>
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
        <th>Name</th>
        <th>Company Name</th>
        <th>Email</th>
        <th>Work Phone</th>
        <th>Payable</th>
        <th>Unused Credits</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue@gamil.com</td>
        <td>01****</td>
        <td>181</td>
        <td>28832</td>
       
      </tr>
    </tbody>
  </table>
</div>
       </div>
    );
};

export default Vendors;