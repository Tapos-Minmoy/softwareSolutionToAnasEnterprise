// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const PaymentsMade = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };

  {
    /* fetching early payment information */
  }
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    // Fetch payment data from the database
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    // Replace with your database fetching logic
    const fetchedData = await fetchPaymentsFromDatabase();
    setPaymentData(fetchedData);
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
              <th>Payment #</th>
              <th>Vendor Name</th>
              <th>Bill#</th>
              <th>Mode</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{payment.date}</td>
                <td>{payment.paymentNumber}</td>
                <td>{payment.vendorName}</td>
                <td>{payment.billNumber}</td>
                <td>{payment.mode}</td>
                <td>{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsMade;
