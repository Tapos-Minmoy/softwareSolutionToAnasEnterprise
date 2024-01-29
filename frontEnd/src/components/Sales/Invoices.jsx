// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const Invoices = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };

  {
    /* fetching early invoices information */
  }
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    // Fetch invoice data from the database
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    // Replace with your database fetching logic
    try {
      const items = await axios.get("http://localhost:8080/api/getAllInvoices");
      console.log("OK");
      setInvoiceData(items.data);
      return items
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
          <a className="btn btn-ghost text-xl">All Invoices</a>
        </div>
        <div
          className="navbar-end"
          onClick={() => handleComponentClick("AddNewInvoice")}
        >
          <a className="btn">+NEW</a>
        </div>
      </div>
      <table className="table w-full mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Invoice#</th>
            <th>Customer Name</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Balance Due</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((invoice, index) => (
            <tr key={invoice.id}>
              <td>{invoice.Date}</td>
              <td>{invoice.id}</td>
              <td>{invoice.CustomerDisplayName}</td>
              <td>{invoice.DueDate}</td>
              <td>{invoice.Status}</td>
              <td>{invoice.Total}</td>
              <td>{invoice.DueAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
