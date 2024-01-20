// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Customer = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };

  {
    /* fetch info before if needed*/
  }
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Fetch Customer data from the database
    fetchCustomerInfo();
  }, []);

  const fetchCustomerInfo = async () => {
    // Replace with your database fetching logic
    const fetchedData = await fetchCustomersFromDatabase();
    setCustomerData(fetchedData);
  };

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">All Customers </a>
        </div>
        <div
          className="navbar-end"
          onClick={() => handleComponentClick("AddNewCustomer")}
        >
          <a className="btn">+NEW</a>
        </div>
      </div>
      <table className="table w-full mt-4">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CUSTOMER NAME</th>
            <th>WORK PHONE</th>
            <th>Balance DUE</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((Customer, index) => (
            <tr key={Customer.id}>
              <td>{Customer.date}</td>
              <td>{Customer.email}</td>
              <td>{Customer.workPhone}</td>
              <td>{Customer.balanceDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Customer;
