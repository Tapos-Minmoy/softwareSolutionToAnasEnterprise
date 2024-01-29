// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentsRecieved = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };

  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    // Fetch payment data from the database
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const paymentsRecieved = await axios.get("http://localhost:8080/api/getAllRecievedPayments");
      setPaymentData(paymentsRecieved.data);
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
    }
  };




  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">All Payments</a>
        </div>
        <div
          className="navbar-end"
          onClick={() => handleComponentClick("AddNewPayment")}
        >
          <a className="btn">+NEW</a>
        </div>
      </div>

      {/* ......?table............ */}
      <div className="overflow-x-auto">
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Invoice #</th>
              <th>Customer Display Name</th>
              <th>Mode</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{payment.Date}</td>
                <td>{payment.InvoiceID}</td>
                <td>{payment.CustomerDisplayName}</td>
                <td>{payment.Mode}</td>
                <td>{payment.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsRecieved;
