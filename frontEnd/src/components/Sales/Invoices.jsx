// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

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
    const fetchedData = await fetchInvoicesFromDatabase();
    setInvoiceData(fetchedData);
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
            <th>Amount</th>
            <th>Balance Due</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((invoice, index) => (
            <tr key={invoice.id}>
              <td>{invoice.date}</td>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.customerName}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.balanceDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
