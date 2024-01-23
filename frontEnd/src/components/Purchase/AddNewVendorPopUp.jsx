import axios from "axios";
import React, { useState, useEffect } from "react";

const AddNewItemPopUp = ({ onClose }) => {
  const [name, setName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const [document, setDocument] = React.useState(null);
  const [vendorDisplayName, setVendorDisplayName] = useState("");
  const [isVendorDisplayNameUnique, setIsVendorDisplayNameUnique] =
    useState(true);
  const [vendorDisplayNameError, setVendorDisplayNameError] = useState("");

  const handleVendorDisplayNameChange = (e) => {
    setVendorDisplayName(e.target.value);
    setIsVendorDisplayNameUnique(true); // Reset uniqueness flag
    setVendorDisplayNameError("");
  };
  const handleSave = async () => {

    // 2. Validate required fields
    if (!name || !companyName || !vendorDisplayName || !phone) {
      alert("Please fill in all required fields.");
      return; // Stop execution if any field is empty
    }
    
    try {
      console.log("sabbir")

      const data={
        displayName:vendorDisplayName,
      }
      const response = await axios.post(`http://localhost:8080/api/getVendorsByDisplayName`, 
        data,
      );
      

    
      if (response.status === 200) {
        // Vendor Display Name already exists
        alert("Vendor Display Name already exists. Please choose another.");
        return;
      } else alert("OK")
    } catch (error) {
      console.error("Error checking vendor uniqueness:", error);
      alert("An unexpected3 error occurred. Please try again later.");
    }    
    

  };


  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Popup content container */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 ">
              Add New Vendor
            </h3>

            <div className="col-span-2 mr-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-2 mr-10">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    className="mt-1 border border-gray-400 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-span-2 mr-10">
                  <label
                    htmlFor="vendorDisplayName"
                    className="block text-sm font-medium text-red-400"
                  >
                    Vendor Display Name*
                  </label>
                  <input
                    type="text"
                    id="vendorDisplayName"
                    name="vendorDisplayName"
                    autoComplete="username"
                    className={`mt-1 w-full border border-gray-400 ${
                      !isVendorDisplayNameUnique && "border border-gray-400"
                    }`}
                    value={vendorDisplayName}
                    onChange={handleVendorDisplayNameChange}
                    required
                  />
                  {vendorDisplayNameError && (
                    <p className="mt-2 text-sm text-red-600">
                      {vendorDisplayNameError}
                    </p>
                  )}
                </div>

                <div className="col-span-2 mr-10">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    autoComplete="organization"
                    className="mt-1 w-full border border-gray-400"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mr-10">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="mt-1 w-full border border-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mr-10">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="mt-1 w-full border border-gray-400"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/*
            <div className="col-span-2">
              <label
                htmlFor="document"
                className="block text-sm font-medium text-gray-700"
              >
                Document
              </label>
              <input
                type="file"
                id="document"
                name="document"
                accept="image/*,.pdf"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => setDocument(e.target.files[0])}
              />
              </div>*/}

            {/* Close button */}
            <div className="sticky bottom-0 w-full flex justify-end items-center px-4 py-4 bg-white mr-10">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewItemPopUp;
