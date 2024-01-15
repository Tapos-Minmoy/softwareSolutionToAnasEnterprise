// eslint-disable-next-line no-unused-vars
import React from 'react';

const Bills = ({ selectedComponent, setSelectedComponent  }) => {
    const handleComponentClick = (componentName) => {
      setSelectedComponent(componentName);
      window.location.hash = componentName;
    };
    return (
        <div>
          <div className="navbar bg-base-100 ">
            <div className="navbar-start">
            <a className="btn btn-ghost text-xl">All Bills</a>
          </div>
          <div className="navbar-end" onClick={() => handleComponentClick('AddNewBill')}>
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
        <th>Bill</th>
        <th>Reference</th>
        <th>Vendor Name</th>
        <th>Status</th>
        <th>Due date</th>
        <th>Amount</th>
        <th>Balance Due</th>
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

export default Bills;