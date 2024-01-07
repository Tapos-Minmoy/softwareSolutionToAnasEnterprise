import React, { useState , useEffect } from "react";

const ItemTable = () => {
  const [items, setItems] = useState([
    { itemDetails: "", quantity: 0, rate: 0, amount: 0 }, // Initial row
  ]);

  // Variables
  const [isItemDropdownOpen, setIsItemDropdownOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const [fetchedItems, setFetchedItems] = useState([]);

  useEffect(() => {
    fetchAvailableItems().then((items) => setFetchedItems(items));
  }, []);

  // Functions
  const toggleItemDropdown = () => {
    setIsItemDropdownOpen(!isItemDropdownOpen);
  };

  const handleItemSelect = (index,item) => {
    // Update the corresponding table row's item details and rate
    // ... your implementation here
  };

  const fetchAvailableItems = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const items = await fetchItemsFromDB(); // Assuming a function named fetchItemsFromDB()
      return items;
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
      return [];
    }
  };

  const validateItemName = () => {
    // Implement validation logic if needed
    return itemName.trim() !== "";
  };

  const handleQuantityChange = (index, newQuantity) => {
    // Update the quantity of the specified row
  };

  const handleRateChange = (index, newRate) => {
    // Update the rate of the specified row
  };

  const handleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const handleAddRow = () => {
    setItems([...items, { itemDetails: "", quantity: 0, rate: 0, amount: 0 }]);
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
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    !validateItemName() && "border-red-500"
                  }`}
                  onClick={toggleItemDropdown}
                  required
                />
                {isItemDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white shadow-md rounded-md">
                    <ul className="py-2 max-h-60 overflow-y-auto">
                      {/* Render fetched items directly from state */}
                      {fetchedItems.map((item) => (
                        <li key={item.id} className="cursor-pointer bg-blue-200 hover:bg-blue-400 mb-1 border border-gray-300" onClick={() => handleItemSelect(index,item)}>
                          {item.name} - {item.rate} - {item.stockCount}
                        </li>
                      ))}
                      <a
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        onClick={() => setShowAddItemModal(true)}
                      >
                        + New Item
                      </a>
                    </ul>
                  </div>
                )}

                {!validateItemName() && (
                  <div className="text-red-500 text-xs italic">
                    Item name is required
                  </div>
                )}
              </div>
            </td>
            <td className="px-4 py-2">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                className="w-full border rounded-md focus:outline-none"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="number"
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
      </tfoot>
    </table>
  );
};

export default ItemTable;
