// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNewVendorPopUp from "./AddNewVendorPopUp"; // Import the new component

const Vendors = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };
  const [fetchedVendors, setFetchedVendors] = useState([]);
  const [needToFetch, setNeedToFetch]=useState(0);
  const [showAddVendorModal, setShowAddVendorModal] = useState(false);

  useEffect(() => {
    fetchAvailableVendors();
    // .then((items) => setFetchedItems(items))
    //.catch((error) => {
    // console.error("Error fetching items:", error);
    // Handle error, e.g., display an error message
    // });
  }, [needToFetch]);
  const fetchAvailableVendors = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const vendors = await axios.get(
        "http://localhost:8080/api/getAllVendors"
      );
      setFetchedVendors(vendors.data);
      return vendors;
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
          <a className="btn btn-ghost text-xl">All Vendors</a>
        </div>
        <div className="navbar-end" onClick={() => setShowAddVendorModal(true)}>
          <a className="btn">+NEW</a>
        </div>
      </div>
      {showAddVendorModal && (
        <AddNewVendorPopUp
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
              <th>Vendor Display Name</th>
              <th>COMPANY NAME</th>
              <th>EMAIL</th>
              <th> PHONE</th>
            </tr>
          </thead>
          <tbody>
            {fetchedVendors.map((vendor) => (
              <tr>
                <td>{vendor.Name}</td>
                <td>{vendor.VendorDisplayName}</td>
                <td>{vendor.CompanyName}</td>
                <td>{vendor.EmailAddress}</td>
                <td>{vendor.PhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendors;
