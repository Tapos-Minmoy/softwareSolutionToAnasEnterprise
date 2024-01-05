import React, { useState ,useEffect} from 'react';
import ShowVendorDetails from '../ShowVendorDetails/ShowVendorDetails';

const AddNewPayment = () => {
  const [vendorName, setVendorName] = useState(''); // Vendor name state
  const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false); // Dropdown visibility state
  const [vendorOptions, setVendorOptions] = useState([]); // List of vendor options from database (assumed)
  const [paymentNumber, setPaymentNumber] = useState('');
  const [showVendorDetails, setShowVendorDetails] = useState(false);
  const [vendorDetails, setVendorDetails] = useState(null);
  const [paymentMade, setPaymentMade] = useState('');
  const [bankCharges, setBankCharges] = useState('');
  const [payFullAmount, setPayFullAmount] = useState(false);
  const [fullAmount, setFullAmount] = useState(0); // Assuming you'll fetch full amount from databas

  useEffect(() => {
    // Fetch a new payment number from the database (replace with your actual logic)
    fetchPaymentNumber()
      .then((number) => setPaymentNumber(number))
      .catch((error) => console.error('Error fetching payment number:', error));
  }, []);

  const fetchPaymentNumber = async () => {
    // Replace with your database logic to fetch a new payment number
    return 'PAY-12345'; // Example placeholder
  };

  // Function to handle vendor dropdown toggle
  const toggleVendorDropdown = () => {
    setIsVendorDropdownOpen(!isVendorDropdownOpen);
  };

  // Function to handle vendor selection
  const handleVendorSelect = (selectedVendor) => {
    setVendorName(selectedVendor);
    toggleVendorDropdown();
  };

  // Function to validate vendor name
  const validateVendorName = () => {
    return vendorName.trim() !== '';
  };

  // Render component
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Record Payment</h1>
        <button className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </header>

      {/* Vendor Name Field */}
      <div className="flex items-center mb-4">
        <label htmlFor="vendor-name" className="w-1/4 text-gray-700">
          Vendor Name:
        </label>
        <div className="relative w-2/3 mr-2">
          <input
            type="text"
            id="vendor-name"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              !validateVendorName() && 'border-red-500' // Add red border for invalid input
            }`}
            onClick={toggleVendorDropdown}
            required // Make input field required
          />
          {isVendorDropdownOpen && (
            // Vendor Dropdown
            <div className="absolute z-10 w-full mt-1 bg-white shadow-md rounded-md">
              <input
                type="text"
                placeholder="Search vendors..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ul className="py-2 max-h-60 overflow-y-auto">
                {/* ... */}
                <li
                    key={5}
                    className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300" // Add border here
                    onClick={() => handleVendorSelect("Abu Taher")}
                  >
                    Abu Taher
                  </li>
                  <li
                    key={5}
                    className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300" // Add border here
                    onClick={() => handleVendorSelect("Rana Miah")}
                  >
                    Rana Miah
                  </li>

                {vendorOptions.map((vendor) => (
                  <li
                    key={vendor.id}
                    className="cursor-pointer hover:bg-gray-100 mb-1 border border-gray-300" // Add border here
                    onClick={() => handleVendorSelect(vendor.name)}
                  >
                    {vendor.name}
                  </li>
                ))}
              </ul>
            </div>

          )}
           {!validateVendorName() && (
            <div className="text-red-500 text-xs italic">Vendor name is required</div>
          )}
        </div>

        {/* View venor details */}

        <div className="flex items-center mb-4">
        {vendorName && (
          <a
            className="text-blue-500 hover:underline"
            onClick={() => setShowVendorDetails(true)}
          >
            View Vendor Details
          </a>
        )}
      </div>

      {showVendorDetails && <ShowVendorDetails vendorDetails={vendorDetails} onClose={() => setShowVendorDetails(false)} />}


        

        {/* Payment # field */}
        <div className="flex items-center mb-4 ml-2">
          <label htmlFor="payment-number" className="w-1/3 text-gray-700">
            Payment #:
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

      <div className="flex items-center mb-4">
      <label htmlFor="payment-made" className="w-1/5 text-gray-700">
         Payment Made: BDT
      </label>
      <div className="w-2/3">
        <input
          type="number"
          id="payment-made"
          value={paymentMade}
          onChange={(e) => setPaymentMade(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
    </div>

    <div className="flex items-center mb-4">
      <div className="w-1/5"></div>
      <input
        type="checkbox"
        id="pay-full-amount"
        checked={payFullAmount}
        onChange={() => setPayFullAmount(!payFullAmount)}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="pay-full-amount" className="ml-2 text-sm font-medium text-gray-700">
        Pay full amount (BDT {fullAmount})
      </label>
    </div>

    <div className="flex items-center mb-4">
      <label htmlFor="bank-charges" className="w-1/5 text-gray-700">
        Bank Charges (if any):
      </label>
      <div className="w-2/3">
        <input
          type="number"
          id="bank-charges"
          value={bankCharges}
          onChange={(e) => setBankCharges(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
    </div>




      {/* Add other input fields here */}
    </div>
  );
};

export default AddNewPayment;