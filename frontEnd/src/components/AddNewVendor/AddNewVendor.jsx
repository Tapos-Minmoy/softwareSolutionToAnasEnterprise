// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const AddNewVendor = () => {
  const [adjustmentType, setAdjustmentType] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [date, setDate] = useState('');
  const [account, setAccount] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    // Handle file attachment
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Form submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-black p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">New Inventory</h1>
        </div>
      </nav>
    <div className="w-full mt-8 p-6 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="adjustmentType">
            1. Made Adjustment
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="quantityAdjustment"
              name="adjustmentType"
              value="Quantity Adjustment"
              checked={adjustmentType === 'Quantity Adjustment'}
              onChange={() => setAdjustmentType('Quantity Adjustment')}
            />
            <label htmlFor="quantityAdjustment" className="ml-2">
              Quantity Adjustment
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="valueAdjustment"
              name="adjustmentType"
              value="Value Adjustment"
              checked={adjustmentType === 'Value Adjustment'}
              onChange={() => setAdjustmentType('Value Adjustment')}
            />
            <label htmlFor="valueAdjustment" className="ml-2">
              Value Adjustment
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="referenceNumber">
            2. Reference Number
          </label>
          <input
            type="text"
            id="referenceNumber"
            className="border p-2 w-full"
            value={referenceNumber}
            onChange={(e) => setReferenceNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            3. Date
          </label>
          <input
            type="date"
            id="date"
            className="border p-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="account">
            4. Account
          </label>
          <input
            type="text"
            id="account"
            className="border p-2 w-full"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="reason">
            5. Reason
          </label>
          <select
            id="reason"
            className="border p-2 w-full"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="" disabled>Select a reason</option>
            <option value="Stock on fire">Stock on fire</option>
            <option value="Stolen goods">Stolen goods</option>
            <option value="Damaged goods">Damaged goods</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            6. Description
          </label>
          <textarea
            id="description"
            className="border p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="file">
            7. Attach File
          </label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>

        <button
          type="submit"
          className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          8. Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddNewVendor;
