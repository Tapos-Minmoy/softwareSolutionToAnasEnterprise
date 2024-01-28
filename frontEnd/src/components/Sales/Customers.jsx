// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    console.log("OKkkkk")
    try {
      const customers = await axios.get("http://localhost:8080/api/getAllCustomers");
      setCustomerData(customers.data);
      return  customers 
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
      return [];
    }
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
            <th>CUSTOMER DISPLAY NAME</th>
            <th>WORK PHONE</th>
            <th>REFERENCE</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((Customer, index) => (
            <tr key={Customer.id}>
              <td>{Customer.CustomerName}</td>
              <td>{Customer.EmailAddress}</td>
              <td>{Customer.CustomerDisplayName}</td>
              <td>{Customer.PhoneNumber}</td>
              <td>{Customer.Reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Customer;
