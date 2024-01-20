import React, { useState, useEffect } from "react";

const AddNewCustomer = ({ onClose }) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [customerDisplayName, setcustomerDisplayName] = useState("");
  const [iscustomerDisplayNameUnique, setIscustomerDisplayNameUnique] =
    useState(true);
  const [customerDisplayNameError, setcustomerDisplayNameError] = useState("");

  const handlecustomerDisplayNameChange = (e) => {
    setcustomerDisplayName(e.target.value);
    setIscustomerDisplayNameUnique(true); // Reset uniqueness flag
    setcustomerDisplayNameError("");
  };

  useEffect(() => {
    // Check for uniqueness in the database (mocked here, replace with your actual DB logic)
    const checkUniqueness = async () => {
      if (customerDisplayName) {
        try {
          const isUnique = await yourDatabaseFunctionToCheckUniqueness(
            customerDisplayName
          );
          setIscustomerDisplayNameUnique(isUnique);
          if (!isUnique) {
            setcustomerDisplayNameError("customer Display Name is already taken.");
          }
        } catch (error) {
          console.error("Error checking uniqueness:", error);
          setcustomerDisplayNameError(
            "An error occurred while checking uniqueness."
          );
        }
      } else {
        setIscustomerDisplayNameUnique(true); // Reset if no value
        setcustomerDisplayNameError("");
      }
    };

    checkUniqueness();
  }, [customerDisplayName]);
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
              Add New Customer
            </h3>

            <div className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    className="mt-1 border border-gray-400"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    className="mt-1 border border-gray-400"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mr-10">
                  <label
                    htmlFor="customerDisplayName"
                    className="block text-sm font-medium text-red-400"
                  >
                    Customer Display Name*
                  </label>
                  <input
                    type="text"
                    id="customerDisplayName"
                    name="customerDisplayName"
                    autoComplete="username"
                    className={`mt-1 w-full border border-gray-400 ${!iscustomerDisplayNameUnique && "border border-gray-400"}`}
                    value={customerDisplayName}
                    onChange={handlecustomerDisplayNameChange}
                    required
                  />
                  {customerDisplayNameError && (
                    <p className="mt-2 text-sm text-red-600">
                      {customerDisplayNameError}
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
                <div className="col-span-2 mr-10">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Balance Due
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

            {/* Close button */}
            <div className="sticky bottom-0 w-full flex justify-end items-center px-4 py-4 bg-white mr-10">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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

export default AddNewCustomer;
