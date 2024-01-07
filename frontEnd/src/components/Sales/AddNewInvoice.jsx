import React, { useState, useEffect } from "react";
import ShowcustomerDetails from "./ShowCustomerDetails";
import AddNewCustomer from "./AddNewCustomer"; // Import the new component
import ItemTable from "./ItemTable";

const AddNewInvoice = () => {
  const [customerName, setCustomerName] = useState(""); // Customer name state
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false); // Dropdown visibility state
  const [customerOptions, setCustomerOptions] = useState([]); // List of customer options from database (assumed)
  const [paymentNumber, setPaymentNumber] = useState("");
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);

  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);

  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [paymentMode, setPaymentMode] = useState("");
  const paymentModes = [
    "Cash",
    "Bank Transfer",
    "Cheque",
    "Bkash",
    "Nagad",
    "Other",
  ]; // Define payment modes

  const [billData, setBillData] = useState([]);
  const [totalAmountDue, setTotalAmountDue] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    // Fetch bill data from the database
    fetchBillData();
  }, []);

  const fetchBillData = async () => {
    // Replace with your database fetching logic
    const fetchedData = await fetchBillsFromDatabase();
    setBillData(fetchedData);
    setTotalAmountDue(
      fetchedData.reduce((sum, bill) => sum + bill.amountDue, 0)
    );
  };

  const handlePaymentChange = (index, value) => {
    const updatedBills = [...billData];
    updatedBills[index].payment = value;
    setBillData(updatedBills);

    const updatedTotalPayment =
      totalPayment + (value - billData[index].payment);
    setTotalPayment(updatedTotalPayment);
  };

  useEffect(() => {
    // Fetch a new payment number from the database (replace with your actual logic)
    fetchPaymentNumber()
      .then((number) => setPaymentNumber(number))
      .catch((error) => console.error("Error fetching payment number:", error));
  }, []);

  const fetchPaymentNumber = async () => {
    // Replace with your database logic to fetch a new payment number
    return "INV-12345"; // Example placeholder
  };

  // Function to handle customer dropdown toggle
  const toggleCustomerDropdown = () => {
    setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
  };

  // Function to handle Customer selection
  const handleCustomerSelect = (selectedCustomer) => {
    setCustomerName(selectedCustomer);
    toggleCustomerDropdown();
  };

  // Function to validate Customer name
  const validateCustomerName = () => {
    return customerName.trim() !== "";
  };

  // Render component
  return (
    <div className="mt-1">
      <div className="overflow-y-auto max-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Record New Invoice</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </header>

        {/* Customer Name Field */}
        <div className=" flex items-center mb-4 ">
          <label htmlFor="Customer-name" className="w-1/4 text-gray-700">
            Customer Name:
          </label>
          <div className="relative w-2/3 mr-2">
            <input
              type="text"
              id="Customer-name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                !validateCustomerName() && "border-red-500" // Add red border for invalid input
              }`}
              onClick={toggleCustomerDropdown}
              required // Make input field required
            />
            {isCustomerDropdownOpen && (
              // Customer Dropdown
              <div className="absolute z-10 w-full mt-1 bg-white shadow-md rounded-md">
                <input
                  type="text"
                  placeholder="Search Customers..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <ul className="py-2 max-h-60 overflow-y-auto">
                  {/* ... */}

                  <li
                    className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300"
                    onClick={() => handleCustomerSelect("Abu Taher")}
                  >
                    Abu Taher
                  </li>

                  <li
                    className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300"
                    onClick={() => handleCustomerSelect("Rana Mia")}
                  >
                    Rana Mia
                  </li>

                  {customerOptions.map((customer) => (
                    <li
                      key={customer.id}
                      className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300" // Add border here
                      onClick={() => handleCustomerSelect(customer.name)}
                    >
                      {customer.name}
                    </li>
                  ))}
                </ul>
                <a
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  onClick={() => setShowAddCustomerModal(true)}
                >
                  + New Customer
                </a>
              </div>
            )}

            {showAddCustomerModal && (
              <AddNewCustomer
                onClose={() => {
                  setShowAddCustomerModal(false);
                  setIsCustomerDropdownOpen(false);
                }}
                onCustomerAdded={() => {
                  // Handle customer addition logic, e.g., fetch updated customer options
                  setIsCustomerDropdown(false); // Close the dropdown
                }}
              />
            )}
            {!validateCustomerName() && (
              <div className="text-red-500 text-xs italic">
                Customer name is required
              </div>
            )}
          </div>

          {/* View venor details */}

          <div className="flex items-center mb-4">
            {customerName && (
              <a
                className="text-blue-500 hover:underline"
                onClick={() => setShowCustomerDetails(true)}
              >
                View Customer Details
              </a>
            )}
          </div>

          {showCustomerDetails && (
            <ShowCustomerDetails
              CustomerDetails={CustomerDetails}
              onClose={() => setShowCustomerDetails(false)}
            />
          )}

          {/* Invoice # field */}
          <div className="flex items-center mb-4 ml-2">
            <label htmlFor="payment-number" className="w-1/3 text-gray-700">
              Invoice #:
            </label>
            <div className="w-2/3">
              <input
                type="text"
                id="payment-number"
                value={paymentNumber}
                disabled // Disable the input field as it's auto-generated
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>



        {/* date and payment mode */}
        <div className="flex flex-row justify-content-between ">
          <div className="flex items-center mb-4 mr-5">
            <label htmlFor="invoice-date" className="w-1/2 text-red-500 mr-4">
              Invoice Date: *
            </label>
            <div className="w-2/3">
              <input
                type="date"
                id="invoice-date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center mb-4 ml-5">
            <label htmlFor="due-date" className="w-1/2 text-red-500 mr-4">
              Due Date: *
            </label>
            <div className="w-2/3">
              <input
                type="date"
                id="due-date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center ml-4">
            <label htmlFor="payment-mode" className="w-1/2 text-red-500 ml-10">
              Payment Mode: *
            </label>
            <div className="w-1/2">
              <select
                id="payment-mode"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              >
                {paymentModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bills to pay of this Customer available */}

        <div className="mt-5 ml-4 font-bold">Items Sold</div>
        <ItemTable />

      </div>

      {/* save and cancel button footer */}
      <div className="sticky bottom-0 w-full flex justify-end items-center px-4 py-4 bg-white">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
        <button
          type="button"
          className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNewInvoice;
