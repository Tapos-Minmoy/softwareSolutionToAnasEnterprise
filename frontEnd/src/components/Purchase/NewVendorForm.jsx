// NewVendorForm.js
import React from "react";

const NewVendorForm = ({ onSave, onCancel }) => {
  // Define state for form fields
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // Handle form submission
  const handleSubmit = () => {
    // Validate form data here if needed

    // Package form data and send it to the parent component
    const formData = {
      firstName,
      lastName,
      companyName,
      email,
      phone,
    };
    onSave(formData);
  };

  return (
    <div className="p-4 bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">New Vendor</h2>
      <div className="mb-4">
        <label htmlFor="first-name" className="text-gray-300 block">
          First Name:
        </label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-black text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="last-name" className="text-gray-300 block">
          Last Name:
        </label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-black text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company-name" className="text-gray-300 block">
          Company Name:
        </label>
        <input
          type="text"
          id="company-name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-black text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="text-gray-300 block">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-black text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="text-gray-300 block">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-black text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="file-upload" className="text-gray-300 block">
          Upload File:
        </label>
        <input
          type="file"
          id="file-upload"
          // Add file handling logic if needed
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-black text-white"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-600 mr-2"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewVendorForm;

