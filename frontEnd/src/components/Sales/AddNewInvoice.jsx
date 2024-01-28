import React, { useState, useEffect } from "react";
import ShowCustomerDetails from "./ShowCustomerDetails";
import AddNewCustomerPopUp from "./AddNewCustomerPopUp"; // Import the new component
import ItemTable from "./ItemTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddNewInvoice = ({selectedComponent, setSelectedComponent }) => {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    { itemName: "", quantity: 0, rate: 0, amount: 0, id: 0, ok: 0 }, // Initial row
  ]);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [adjustment, setAdjustment] = useState(0);
  const [total, setTotal] = useState(0);

  const [CustomerName, setCustomerName] = useState(""); // Customer name state
  const [needToFetchCustomers, setNeedToFetchCustomers] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false); // Dropdown visibility state
  const [CustomerOptions, setCustomerOptions] = useState([]); // List of Customer options from database (assumed)
  const [paymentNumber, setPaymentNumber] = useState("");
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [CustomerDetails, setCustomerDetails] = useState(null);
  const [paidAmount, setPaidAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);

  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const handleAddCustomerClick = () => {
    setShowAddCustomerModal(true);
  };
  const handleNewCustomerSave = (formData) => {
    // Handle the logic to save the new Customer data (e.g., API call, database update)
    console.log("New Customer Form Data:", formData);

    // Close the modal
    setShowAddCustomerModal(false);
  };
  // Function to handle form cancellation and close the modal
  const handleNewCustomerCancel = () => {
    setShowAddCustomerModal(false);
  };

  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [paymentMode, setPaymentMode] = useState("Cash");
  const paymentModes = [
    "Cash",
    "Bank Transfer",
    "Cheque",
    "Bkash",
    "Nagad",
    "Other",
  ]; // Define payment modes

  const [billData, setBillData] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const handlePaymentChange = (index, value) => {
    const updatedBills = [...billData];
    updatedBills[index].payment = value;
    setBillData(updatedBills);

    const updatedTotalPayment =
      totalPayment + (value - billData[index].payment);
    setTotalPayment(updatedTotalPayment);
  };

  useEffect(() => {
    fetchAvailableCustomers();
    // .then((items) => setFetchedItems(items))
    //.catch((error) => {
    // console.error("Error fetching items:", error);
    // Handle error, e.g., display an error message
    // });
  }, [needToFetchCustomers]);
  const fetchAvailableCustomers = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const Customers = await axios.get(
        "http://localhost:8080/api/getAllCustomers"
      );
      setCustomerOptions(Customers.data);
      return Customers;
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
      return [];
    }
  };

  useEffect(() => {
    // Fetch a new payment number from the database (replace with your actual logic)
    fetchPaymentNumber()
      .then((number) => setPaymentNumber(number))
      .catch((error) => console.error("Error fetching payment number:", error));
  }, []);

  const fetchPaymentNumber = async () => {
    // Replace with your database logic to fetch a new payment number
    return "BILL-****"; // Example placeholder
  };

  // Function to handle Customer dropdown toggle
  const toggleCustomerDropdown = () => {
    setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
    setNeedToFetchCustomers(!needToFetchCustomers);
  };

  // Function to handle Customer selection
  const handleCustomerSelect = (selectedCustomer) => {
    setCustomerName(selectedCustomer.CustomerDisplayName);
    toggleCustomerDropdown();
  };

  // Function to validate Customer name
  const validateCustomerName = () => {
    return CustomerName.trim() !== "";
  };

  const addBillToItem =async (data) =>{
    console.log(data);
    try{
      const response = await axios.post(
        "http://localhost:8080/api/addItemToBill",
        data
      );
    }catch(error){
      console.log(error);
    }
  }

  const addPaymentOK =async (data) =>{
    if(data.paidAmount===0) return;
    try{
      const response = await axios.post(
        "http://localhost:8080/api/addPayment",
        data
      );
    }catch(error){
      console.log(error);
    }
  }

  const updataAccount = async(AccountingInfo,increment) => {
    const data={
      AccountName: AccountingInfo,
      increment:increment,
    }
    try{ 
      const response = await axios.post(
      "http://localhost:8080/api/updateAccountingInfo",
      data
    )}catch(error){
      console.log(error);
    }
  }

  const updatItem=async(id,quantity) => {
    const data={
      ID : id,
      quantity:quantity,
    }
    try{ 
      const response = await axios.post(
      "http://localhost:8080/api/updateItemQuantity",
      data
    )}catch(error){
      console.log(error);
    }
  }
  const updateAccountingInfo = async(asset,accountPayable,cash) => {
    if(asset!==0) updataAccount("Asset",asset);
    if(accountPayable!==0)  updataAccount("AccountPayable",accountPayable);
    if(cash!==0) updataAccount("Cash",cash);

  }
  const handleSave = async () => {
    if(!CustomerName){
      alert("Select a Customer name form the available list....");
      return;
    }
    if(!invoiceDate){
      alert("Enter bill date");
      return;
    }

    if(dueAmount>0 && !dueDate){
      alert("Select a due date");
      return;
    }

    try {
      const data = {
        CustomerDisplayName: CustomerName,
        SubTotal: subTotal,
        DueAmount: dueAmount,
        Discount: discount,
        Total: total,
        DueDate: dueDate,
        Date: invoiceDate,
        Status:
          dueAmount === 0
            ? "paid"
            : dueAmount < total
            ? "partiallyPaid"
            : "Open",
      };
      const response = await axios.post(
        "http://localhost:8080/api/addBill",
        data
      );
      console.log(response.data.id);
      // ... rest of your success and error handling logic ...
      {
        items.map((item, index) => {
          const data = {
            BillID: response.data.id,
            ItemID: item.id,
            Quantity: item.quantity,
            Rate: item.rate,
          };
          updatItem(item.id,item.quantity);
          addBillToItem(data);
        })

        const data = {
            Date:invoiceDate,
            BillID:response.data.id,
            CustomerDisplayName:CustomerName,
            Mode: paymentMode,
            Amount: paidAmount,
        }
        
        addPaymentOK(data);
        updateAccountingInfo(total,dueAmount,-paidAmount);
        setSelectedComponent("Bills");
        navigate("/home");

      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again later.");
    }
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
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
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
              value={CustomerName}
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

                  {CustomerOptions.map((Customer) => (
                    <li
                      key={Customer.id}
                      className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300" // Add border here
                      onClick={() => handleCustomerSelect(Customer)}
                    >
                      {Customer.CustomerDisplayName}
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
              <AddNewCustomerPopUp
                onClose={() => {
                  setShowAddCustomerModal(false);
                  setIsCustomerDropdownOpen(false);
                }}
                onCustomerAdded={() => {
                  // Handle Customer addition logic, e.g., fetch updated Customer options
                  setIsCustomerDropdown(false); // Close the dropdown
                }}
              />
            )}
          </div>

          {/* View venor details */}

          <div className="flex items-center mb-4">
            {CustomerName && (
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
              Bill #:
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
        <ItemTable
          items={items}
          setItems={setItems}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          discount={discount}
          setDiscount={setDiscount}
          adjustment={adjustment}
          setAdjustment={setAdjustment}
          total={total}
          setTotal={setTotal}
          paidAmount={paidAmount}
          setPaidAmount={setPaidAmount}
          dueAmount={dueAmount}
          setDueAmount={setDueAmount}
        />
        {/* save and cancel button footer */}
        <div className="sticky bottom-0 w-full flex justify-end items-center px-4 py-4 bg-white">
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
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewInvoice;
