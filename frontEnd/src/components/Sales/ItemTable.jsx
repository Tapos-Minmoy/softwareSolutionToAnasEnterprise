import React, { useState, useEffect } from "react";
import AddNewItemPopUp from "./AddNewItemPopUp";

import axios from "axios";

const ItemTable = ({ items, setItems ,subTotal , setSubTotal, discount ,setDiscount, adjustment , setAdjustment, total,setTotal,paidAmount, setPaidAmount , dueAmount, setDueAmount}) => {
  /*
  const [items, setItems] = useState([
    { itemName: "", quantity: 0, rate: 0, amount: 0, ok: 0 }, // Initial row
  ]);*/

  // Variables
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [cntOfRow, setCntOfRow] = useState(1);
  const [fetchedItems, setFetchedItems] = useState([]);
  const [neetToFetch, setNeedToFetch] = useState(false);



  useEffect(() => {
    setTotal(subTotal-discount+adjustment);
  },[subTotal,discount,adjustment])

  useEffect(() => {
    fetchAvailableItems();
    // .then((items) => setFetchedItems(items))
    //.catch((error) => {
    // console.error("Error fetching items:", error);
    // Handle error, e.g., display an error message
    // });
  }, [neetToFetch]);

  useEffect(()=>{
    setDueAmount(Number(total-paidAmount) || 0)
  },[paidAmount,total])



  // Functions
  const handlePaidAmountChange = (paidAmt) =>{
    paidAmount=Number(paidAmt) || 0;
    setPaidAmount(paidAmount);
  }

  const handleDiscountChange = (discount) =>{
    discount = Number(discount) || 0;
    setDiscount(discount); 
  }

  const handleAdjstmentChange = (adjustment) =>{
    adjustment = Number(adjustment) || 0;
    setAdjustment(adjustment); 
  }
  const toggleItemDropdown = (index, val) => {
    console.log(index, val);
    if (val === 1) {
      setNeedToFetch(!neetToFetch);
      setItems((prevItems) =>
        prevItems.map((row, i) => (i !== index ? { ...row, ok: 0 } : row))
      );
    }
    setItems((prevItems) =>
      prevItems.map((row, i) => (i === index ? { ...row, ok: val } : row))
    );
  };

  const handleItemSelect = (index, item) => {
    // Update the corresponding table row's item details and rate

    setItems((prevItems) =>
      prevItems.map((row, i) =>
        i === index
          ? {
              ...row,
              itemName: item.ItemName + " - " + item.ItemCategory,
              quantity: 0,
              rate: 0,
              amount: 0,
              id: item.id,
            }
          : row
      )

    );

    toggleItemDropdown(index, 0);
  };

  const fetchAvailableItems = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const items = await axios.get(
        "http://localhost:8080/api/getAllItems"
      );
      setFetchedItems(items.data);
      return items;
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
      return [];
    }
  };

  function calculateSubTotal() {
    let subTotal = 0;
    for (const item of items) {
      subTotal += item.amount;
      console.log(item.itemName);
    }
    setSubTotal(subTotal);
  }

  const handleQuantityChange = (index, newQuantity) => {
    // Ensure quantity is a valid numerical value
    const parsedQuantity = parseFloat(newQuantity) || 0;
    const previousAmount = items[index].amount || 0;
    const previousRate = items[index].rate || 0;
    const presentAmount=previousRate*parsedQuantity || 0;
    console.log(previousAmount,subTotal);
    setSubTotal((subTotal-previousAmount+presentAmount) || (subTotal-previousAmount) || 0);

    setItems((prevItems) =>
      prevItems.map((row, i) =>
        i === index
          ? {
              ...row,              
              quantity: Number(newQuantity) ,
              amount: (presentAmount) , // Update amount for the row
            }
          : row
      )
    );

    //setSubTotal(calculateSubTotal()); // Calculate and update subTotal
  };

  const handleRateChange = (index, newRate) => {
    // Ensure rate is a valid numerical value
    const parsedRate = parseFloat(newRate) || 0;
    const previousAmount = items[index].amount || 0;
    const previousQuantity = items[index].quantity || 0;
    const presentAmount=previousQuantity*parsedRate || 0;
    setSubTotal((subTotal-previousAmount+presentAmount) || (subTotal-previousAmount) || 0);

    setItems((prevItems) =>
      prevItems.map((row, i) =>
        i === index
          ? {
              ...row,
              rate: Number(parsedRate) ,
              amount: (Number(presentAmount) ), // Update amount for the row
            }
          : row
      )
    );

   // console.log(subTotal);
  };

  const handleDelete = (index) => {
    if (cntOfRow == 1) return;
    setItems(items.filter((item, i) => i !== index));
    setCntOfRow(cntOfRow - 1);
  };

  const handleAddRow = () => {
    setItems([...items, { itemName: "", quantity: 0, rate: 0, amount: 0 }]);
    setCntOfRow(cntOfRow + 1);
  };

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">ITEM DETAILS</th>
          <th className="px-4 py-2">QUANTITY</th>
          <th className="px-4 py-2">RATE</th>
          <th className="px-4 py-2">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className="px-4 py-2">
              {/* Implement item dropdown here, similar to customer dropdown */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={item.itemName}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${"border-red-500"}`}
                  onClick={() =>
                    toggleItemDropdown(index, item.ok === 1 ? 0 : 1)
                  }
                  required
                />
                {item.ok === 1 && (
                  <div className="absolute z-10 w-full mt-1 bg-white shadow-md rounded-md">
                    <ul className="py-2 max-h-60 overflow-y-auto">
                      {/* Render fetched items directly from state */}
                      {fetchedItems.map((item) => (
                        <li
                          key={item.id}
                          className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300"
                          onClick={() => handleItemSelect(index, item)}
                        >
                          {item.ItemName} - {item.ItemCategory} -{" "}
                          {item.Quantity}
                        </li>
                      ))}
                      <li
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        onClick={() => setShowAddItemModal(true)}
                      >
                        + New Item
                      </li>
                    </ul>
                  </div>
                )}

                {showAddItemModal && (
                  <AddNewItemPopUp
                    onClose={() => {
                      setShowAddItemModal(false);
                      setIsItemDropdownOpen(false);
                    }}
                    onItemAdded={() => {
                      // Handle Vendor addition logic, e.g., fetch updated Vendor options
                      setIsItemDropdown(false); // Close the dropdown
                    }}
                  />
                )}

                {
                  <div className="text-red-500 text-xs italic">
                    Item name is required
                  </div>
                }
              </div>
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                className="w-full border rounded-md focus:outline-none"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={item.rate}
                onChange={(e) => handleRateChange(index, e.target.value)}
                className="w-full border rounded-md focus:outline-none"
              />
            </td>
            <td className="px-4 py-2">{item.quantity * item.rate}</td>
            <td className="px-4 py-2">
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            <a
              onClick={handleAddRow}
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              + Add New Row
            </a>
          </td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td>Sub Total:</td>
          <td className="px-4 py-2">{subTotal}</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td>Discount:</td>
          <td className="px-4 py-2">
            <input
              type="text"
              value={discount}
              onChange={(e) => handleDiscountChange(e.target.value)}
              className="w-full border border-gray-400 focus:outline-none"
            />
          </td>
        </tr>
        {/*
        <tr>
          <td colSpan="2"></td>
          <td>Adjustment:</td>
          <td className="px-4 py-2">
            <input
              type="text"
              value={adjustment}
              onChange={(e) => handleAdjstmentChange(e.target.value)}
              className="w-full border border-gray-400 focus:outline-none"
            />
          </td>
        </tr>*/}
        <tr>
          <td colSpan="2"></td>
          <td>Total:</td>
          <td className="px-4 py-2">{total}</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td>Paid Amount:</td>
          <td className="px-4 py-2">
            <input
              type="text"
              value={paidAmount}
              onChange={(e) => handlePaidAmountChange(e.target.value)}
              className="w-full border border-gray-400 focus:outline-none"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td>Due Amount:</td>
          <td className="px-4 py-2">{dueAmount}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ItemTable;
