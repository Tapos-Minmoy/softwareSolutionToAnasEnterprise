import React, { useState, useEffect } from "react";
import Vendors from "../Purchase/Vendors";
import Expenses from "../Expenses/Expenses";
import PurchaseOrder from "../Purchase/PurchaseOrder";
import PurchaseReceives from "../Purchase/PurchaseReceives";
import Bills from "../Purchase/Bills";
import AddNewVendor from "../Purchase/AddNewVendor";
import PaymentsMade from "../Purchase/PaymentsMade";
import AddNewPayment from "../Purchase/AddNewPayment";
import AddNewBill from "../Purchase/AddNewBill";
import AddNewCusomer from "../Sales/AddNewCustomer";
import AddNewInvoice from "../Sales/AddNewInvoice";
import AddNewPaymentRecieved from "../Sales/AddNewPaymentRecieved";
import Customers from "../Sales/Customers";
import Invoices from "../Sales/Invoices";
import Sales from "../Sales/Sales";
import SalesReturns from "../Sales/SalesReturns";
import PaymentReceived from "../Sales/PaymentReceived";
import Dashboard from "../Dashboard/Dashboard";
import Items from "../Items/Items";
import Payable from "../Payable/Payable";
import Recievable from "../Recievable/Recievable";

const Home = () => {
  const [isPurchaseDrawerOpen, setIsPurchaseDrawerOpen] = useState(false);
  const [isSalesDrawerOpen, setIsSalesDrawerOpen] = useState(false);

  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the leading #
    if (hash) {
      setSelectedComponent(hash);
    }
  }, []); // Empty dependency array to run only once on component mount

  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
  };

  return (
    <div className="flex  flex-column pt-16">
      <div className="w-1/6 h-screen ">
        <ul className="text-white font-semibold text-xl bg-black menu menu-sm h-screen z-[1] p-2 shadow w-52 hidden md:block">
          <li onClick={() => handleComponentClick("Dashboard")}>
            <a className="hover:text-orange-500">Dashboard</a>
          </li>

          <li></li>
          <li onClick={() => handleComponentClick("Items")}>
            <a className="hover:text-orange-500">Items</a>
          </li>
          <li></li>
          <li className="relative">
            <a
              className="hover:text-orange-500 flex items-center"
              onClick={() => {
                setIsPurchaseDrawerOpen(!isPurchaseDrawerOpen);
                setIsSalesDrawerOpen(false); // Close the Sales drawer if it's open
              }}
            >
              Purchase
              <span
                className={`ml-2 transition-transform duration-300 ${
                  isPurchaseDrawerOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
          {isPurchaseDrawerOpen && (
            <ul
              className={`drawer-content ${
                isPurchaseDrawerOpen ? "drawer-open" : ""
              }`}
              style={{ marginLeft: "12px" }}
            >
              <li onClick={() => handleComponentClick("Vendors")}>
                <a className="hover:text-orange-500">Vendors</a>
              </li>
              {/*
              <li onClick={() => handleComponentClick("Expenses")}>
                <a className="hover:text-orange-500">Expenses</a>
              </li>
              <li onClick={() => handleComponentClick("PurchaseOrder")}>
                <a className="hover:text-orange-500">Purchase Order</a>
              </li>
              <li onClick={() => handleComponentClick("PurchaseReceives")}>
                <a className="hover:text-orange-500">Purchase Receives</a>
              </li> 
              */}

              <li onClick={() => handleComponentClick("Bills")}>
                <a className="hover:text-orange-500">Bills</a>
              </li>
              <li onClick={() => handleComponentClick("PaymentsMade")}>
                <a className="hover:text-orange-500">Payments Made</a>
              </li>
            </ul>
          )}

          <li className="relative">
            <a
              className="hover:text-orange-500 flex items-center"
              onClick={() => {
                setIsSalesDrawerOpen(!isSalesDrawerOpen);
                setIsPurchaseDrawerOpen(false);
              }}
            >
              Sales
              <span
                className={`ml-2 transition-transform duration-300 ${
                  isSalesDrawerOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
            {isSalesDrawerOpen && (
              <ul
                className={`drawer-content ${
                  isSalesDrawerOpen ? "drawer-open" : ""
                }`}
                style={{ marginLeft: "12px" }}
              >
                <li onClick={() => handleComponentClick("Customers")}>
                  <a className="hover:text-orange-500">Customers</a>
                </li>
                <li onClick={() => handleComponentClick("Invoices")}>
                  <a className="hover:text-orange-500">Invoices</a>
                </li>
                <li onClick={() => handleComponentClick("PaymentReceived")}>
                  <a className="hover:text-orange-500">Payment Received</a>
                </li>
                {/*
                <li onClick={() => handleComponentClick("SalesReturns")}>
                  <a className="hover:text-orange-500">Sales Return</a>
                </li>
              */}
              </ul>
            )}
          </li>

          <li></li>
          <li onClick={() => handleComponentClick("Payable")}>
            <a className="hover:text-orange-500">Payable</a>
          </li>
          <li onClick={() => handleComponentClick("Recievable")}>
            <a className="hover:text-orange-500">Recievable</a>
          </li>
          {/*
          <li>
            <a className="hover:text-orange-500">Reports</a>
          </li> 
          
          */}
        </ul>
      </div>
      {selectedComponent && (
        <div className="basis-3/4">
          {selectedComponent === "Vendors" && (
            <Vendors
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "Payable" && (
            <Payable
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "Recievable" && (
            <Recievable
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "Items" && (
            <Items
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}{" "}
          {selectedComponent === "Dashboard" && <Dashboard />}
          {selectedComponent === "Expenses" && <Expenses />}
          {selectedComponent === "PurchaseOrder" && <PurchaseOrder />}
          {selectedComponent === "PurchaseReceives" && <PurchaseReceives />}
          {selectedComponent === "Bills" && (
            <Bills
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "AddNewVendor" && <AddNewVendor />}
          {selectedComponent === "PaymentsMade" && (
            <PaymentsMade
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "AddNewPayment" && <AddNewPayment />}
          {selectedComponent === "AddNewBill" && (
            <AddNewBill
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {/*Sales and related */}
          {selectedComponent === "Sales" && (
            <Sales
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "Customers" && (
            <Customers
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "Invoices" && (
            <Invoices
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "SalesReturns" && (
            <SalesReturns
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "PaymentReceived" && (
            <PaymentReceived
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "AddNewPaymentRecieved" && (
            <AddNewPaymentRecieved />
          )}
          {selectedComponent === "AddNewInvoice" && (
            <AddNewInvoice
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "AddNewCustomer" && <AddNewCusomer />}
        </div>
      )}
    </div>
  );
};

export default Home;
