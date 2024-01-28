// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNewItemPopUp from "../Purchase/AddNewItemPopUp"; // Import the new component

const Items = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };
  const [fetchedItems, setFetchedItems] = useState([]);
  const [needToFetch, setNeedToFetch] = useState(0);
  const [showAddVendorModal, setShowAddVendorModal] = useState(false);

  useEffect(() => {
    fetchAvailableItems();
    // .then((items) => setFetchedItems(items))
    //.catch((error) => {
    // console.error("Error fetching items:", error);
    // Handle error, e.g., display an error message
    // });
  }, []);
  const fetchAvailableItems = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const  items = await axios.get(
        "http://localhost:8080/api/getAllItems"
      );
      setFetchedItems(items.data);
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
          <a className="btn btn-ghost text-xl">All Items</a>
        </div>
        <div className="navbar-end" onClick={() => setShowAddVendorModal(true)}>
          <a className="btn">+NEW</a>
        </div>
      </div>
      {showAddVendorModal && (
        <AddNewItemPopUp
          onClose={() => {
            setShowAddVendorModal(false);
            setNeedToFetch(!needToFetch); // Close the dropdown
          }}
          onVendorAdded={() => {
            // Handle Vendor addition logic, e.g., fetch updated Vendor options
            setNeedToFetch(!needToFetch); // Close the dropdown
          }}
        />
      )}

      {/* ......?table............ */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Catagory</th>
              <th>Unit</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {fetchedItems.map((Items) => (
              <tr>
                <td>{Items.ItemName}</td>
                <td>{Items.ItemCategory}</td>
                <td>{Items.Unit}</td>
                <td>{Items.Quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
