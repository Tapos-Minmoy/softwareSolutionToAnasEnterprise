// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const Bills = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };
  const [fetchedBills, setFetchedBills] = useState([]);

  useEffect(() => {
    fetchAvailableBiils();
    // .then((items) => setFetchedItems(items))
    //.catch((error) => {
    // console.error("Error fetching items:", error);
    // Handle error, e.g., display an error message
    // });
  }, []);
  const fetchAvailableBiils = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const items = await axios.get("http://localhost:8080/api/getAllBills");
      setFetchedBills(items.data);
      return items;
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
      return [];
    }
  };

  return (
    <div className="overflow-y-auto max-h-screen">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">All Bills</a>
        </div>
        <div
          className="navbar-end"
          onClick={() => handleComponentClick("AddNewBill")}
        >
          <a className="btn">+NEW</a>
        </div>
      </div>

      {/* ......?table............ */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Bill #</th>
              <th>Vendor Display Name</th>
              <th>Status</th>
              <th>Due date</th>
              <th>Amount</th>
              <th>Balance Due</th>
            </tr>
          </thead>
          <tbody>
            {fetchedBills.map((bill) => (
              <tr>
                <td>{bill.Date}</td>
                <td>{bill.id}</td>
                <td>{bill.VendorDisplayName}</td>
                <td>{bill.Status}</td>
                <td>{bill.DueDate}</td>
                <td>{bill.Total}</td>
                <td>{bill.DueAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bills;
