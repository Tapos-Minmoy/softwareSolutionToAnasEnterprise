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
  const [billsData, setBillsData] = useState([]);

  useEffect(() => {
    // Fetch Customer data from the database
    fetchBillInfo();
  }, []);

  const fetchBillInfo = async () => {
    console.log("OKkkkk")
    try {
      const  bills = await axios.get("http://localhost:8080/api/getBillsDue");
      setBillsData(bills.data);
      return  bills 
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
          <a className="btn btn-ghost text-xl">All Payable </a>
        </div>
  
      </div>
      <table className="table w-full mt-4">
        <thead>
          <tr>
            <th>billId</th>
            <th>vendorDisplayName</th>
            <th>DueAmount</th>
            <th>Total</th>
            <th>dueDate</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {billsData.map((bill, index) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.VendorDisplayName}</td>
              <td>{bill.DueAmount}</td>
              <td>{bill.Total}</td>
              <td>{bill.DueDate}</td>
              <td>{bill.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Customer;
