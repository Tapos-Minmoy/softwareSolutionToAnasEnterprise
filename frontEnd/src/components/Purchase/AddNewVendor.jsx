import React, { useState } from 'react';

const AddNewVendor = () => {
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vendorDisplayName, setVendorDisplayName] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const [currency, setCurrency] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [document, setDocument] = useState(null);

  const handleFileChange = (event) => {
    // Handle file attachment
    const selectedFile = event.target.files[0];
    setDocument(selectedFile);
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Form saved!');
  };

  const handleCancel = () => {
    // Handle cancel logic
    console.log('Form cancelled!');
  };

  return (
    <div className="w-full mx-auto bg-white rounded shadow-md overflow-y-auto max-h-screen md-40">
      <h2 className="text-2xl font-bold mb-4">New Vendor</h2>

      <div className="flex mb-4">
        <div className="mr-2 w-1/4">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Salutation"
            value={salutation}
            onChange={(e) => setSalutation(e.target.value)}
          />
        </div>
        <div className="mr-2 w-1/4">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-1/4">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          className="border p-2 w-full"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vendorDisplayName">
          Vendor Display Name
        </label>
        <input
          type="text"
          id="vendorDisplayName"
          className="border p-2 w-full"
          value={vendorDisplayName}
          onChange={(e) => setVendorDisplayName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vendorEmail">
          Vendor Email
        </label>
        <input
          type="email"
          id="vendorEmail"
          className="border p-2 w-full"
          value={vendorEmail}
          onChange={(e) => setVendorEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vendorPhone">
          Vendor Phone
        </label>
        <input
          type="tel"
          id="vendorPhone"
          className="border p-2 w-full"
          value={vendorPhone}
          onChange={(e) => setVendorPhone(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="currency">
          Currency
        </label>
        <select
          id="currency"
          className="border p-2 w-full"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="" disabled>Select Currency</option>
          {/* Add currency options here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="taxRate">
          Tax Rate
        </label>
        <input
          type="text"
          id="taxRate"
          className="border p-2 w-full"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="paymentTerm">
          Payment Term
        </label>
        <select
          id="paymentTerm"
          className="border p-2 w-full"
          value={paymentTerm}
          onChange={(e) => setPaymentTerm(e.target.value)}
        >
          <option value="" disabled>Select Payment Term</option>
          <option value="Net 15">Net 15</option>
          <option value="Net 30">Net 30</option>
          <option value="Net 45">Net 45</option>
          <option value="Net 60">Net 60</option>
          <option value="Due end of the month">Due end of the month</option>
          <option value="Due end of the next month">Due end of the next month</option>
          <option value="Due on Receipt">Due on Receipt</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="document">
          Document
        </label>
        <input
          type="file"
          id="document"
          className="border p-2 w-full"
          onChange={handleFileChange}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNewVendor;
