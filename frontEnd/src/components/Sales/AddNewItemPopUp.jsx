import axios from "axios";
import React, { useState, useEffect } from "react";

const AddNewItemPopUp = ({ onClose }) => {
  const [ItemName, setItemName] = React.useState("");
  const [ItemCategory, setItemCategory] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);

  // const [document, setDocument] = React.useState(null);
  const [unit, setUnit] = useState("pcs");
  const units = [
    "pcs",
    "kg",
    "box",
    "Other",
  ]; // Define payment modes

  const handleSave = async () => {

    // 2. Validate required fields
    if (!ItemCategory || !ItemName) {
      alert("Please fill in all required fields.");
      return; // Stop execution if any field is empty

    }

    try {
      const data = {
        ItemName: ItemName,
        ItemCategory: ItemCategory,
        Unit: unit,
        Quantity: quantity
      };
      const response = await axios.post('http://localhost:8080/api/addItem', data);

      console.log(unit);
      // ... rest of your success and error handling logic ...

    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred. Please try again later.');
    }
    onClose();
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
              Add New Item
            </h3>

            <div className="col-span-2 mr-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="ItemName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="ItemName"
                    name="ItemName"
                    autoComplete="given-name"
                    className="mt-1 border border-gray-400 w-full"
                    value={ItemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="ItemCategory"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Item  Category
                  </label>
                  <input
                    type="text"
                    id="ItemCategory"
                    name="ItemCategory"
                    autoComplete="given-name"
                    className="mt-1 border border-gray-400 w-full"
                    value={ItemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                    required
                  />
                </div>


                <div className="col-span-1 sm:col-span-2 mr-10">
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                    Unit : *
                  </label>
                  <div className="w-1/2">
                    <select
                      id="unit"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    >
                      {units.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
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
