import React, { useState } from 'react';

const NewBillForm = () => {
  const [formData, setFormData] = useState({
    vendorName: '',
    billNumber: '',
    orderNumber: '',
    billDate: '',
    dueDate: '',
    currency: '',
    paymentTerm: '',
    subject: '',
    itemTaxPreference: '',
    discountType: '',
    itemTable: [
      { itemDetails: '', account: '', quantity: '', rate: '', tax: '', customerDetails: '', amount: '' },
    ],
    subtotal: '0.00',
    discount: '',
    total: '',
    notes: '',
    uploadFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (e, rowIndex, field) => {
    const updatedItemTable = [...formData.itemTable];
    updatedItemTable[rowIndex][field] = e.target.value;
    setFormData({ ...formData, itemTable: updatedItemTable });
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      itemTable: [
        ...formData.itemTable,
        { itemDetails: '', account: '', quantity: '', rate: '', tax: '', customerDetails: '', amount: '' },
      ],
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, uploadFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-3 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">New Bill</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="mb-4">
          <label htmlFor="vendorName" className="block text-sm font-bold mb-2">
            Vendor Name
          </label>
          <input
            type="text"
            id="vendorName"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="billNumber" className="block text-sm font-bold mb-2">
            Bill#
          </label>
          <input
            type="text"
            id="billNumber"
            name="billNumber"
            value={formData.billNumber}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="orderNumber" className="block text-sm font-bold mb-2">
            Order Number
          </label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="billDate" className="block text-sm font-bold mb-2">
            Bill Date
          </label>
          <input
            type="text"
            id="billDate"
            name="billDate"
            value={formData.billDate}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-sm font-bold mb-2">
            Due Date
          </label>
          <input
            type="text"
            id="dueDate"
            name="dueDate"
            placeholder="dd MMM yyyy"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currency" className="block text-sm font-bold mb-2">
            Currency
          </label>
          <input
            type="text"
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentTerm" className="block text-sm font-bold mb-2">
            Payment Term
          </label>
          <select
            id="paymentTerm"
            name="paymentTerm"
            value={formData.paymentTerm}
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="">Select Payment Term</option>
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
          <label htmlFor="subject" className="block text-sm font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject within 250 characters"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="mr-4">
              <label htmlFor="itemTaxPreference" className="block text-sm font-bold mb-2">
                Item Tax Preference
              </label>
              <select
                id="itemTaxPreference"
                name="itemTaxPreference"
                value={formData.itemTaxPreference}
                onChange={handleChange}
                className="w-full border p-2"
              >
                <option value="">Select Tax Preference</option>
                <option value="Tax Exclusive">Tax Exclusive</option>
                <option value="Tax Inclusive">Tax Inclusive</option>
              </select>
            </div>
            <div>
              <label htmlFor="discountType" className="block text-sm font-bold mb-2">
                Discount Type
              </label>
              <select
                id="discountType"
                name="discountType"
                value={formData.discountType}
                onChange={handleChange}
                className="w-full border p-2"
              >
                <option value="">Select Discount Type</option>
                <option value="At Transaction Level">At Transaction Level</option>
                <option value="At Line Item Level">At Line Item Level</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-2">Item Table</h2>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th>ITEM DETAILS</th>
            <th>ACCOUNT</th>
            <th>QUANTITY</th>
            <th>RATE</th>
            <th>TAX</th>
            <th>CUSTOMER DETAILS</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {formData.itemTable.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name={`itemDetails_${index}`}
                  value={item.itemDetails}
                  onChange={(e) => handleItemChange(e, index, 'itemDetails')}
                  className="w-full border p-2"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`account_${index}`}
                  value={item.account}
                  onChange={(e) => handleItemChange(e, index, 'account')}
                  className="w-full border p-2"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`quantity_${index}`}
                  value={item.quantity}
                  onChange={(e) => handleItemChange(e, index, 'quantity')}
                  className="w-full border p-2"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`rate_${index}`}
                  value={item.rate}
                  onChange={(e) => handleItemChange(e, index, 'rate')}
                  className="w-full border p-2"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`tax_${index}`}
                  value={item.tax}
                  onChange={(e) => handleItemChange(e, index, 'tax')}
                  className="w-full border p-2"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`customerDetails_${index}`}
                  value={item.customerDetails}
                  onChange={(e) => handleItemChange(e, index, 'customerDetails')}
                  className="w-full border p-2"
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`amount_${index}`}
                  value={item.amount}
                  onChange={(e) => handleItemChange(e, index, 'amount')}
                  className="w-full border p-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRow} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        + Add New Row
      </button>

      <div className="mb-4">
        <label htmlFor="subtotal" className="block text-sm font-bold mb-2">
          Subtotal
        </label>
        <input
          type="text"
          id="subtotal"
          name="subtotal"
          value={formData.subtotal}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="discount" className="block text-sm font-bold mb-2">
          Discount
        </label>
        <input
          type="text"
          id="discount"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="total" className="block text-sm font-bold mb-2">
          Total
        </label>
        <input
          type="text"
          id="total"
          name="total"
          value={formData.total}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-bold mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="uploadFile" className="block text-sm font-bold mb-2">
          Upload File
        </label>
        <input type="file" id="uploadFile" onChange={handleFileChange} />
      </div>

      <div className="flex justify-end">
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
          Save
        </button>
        <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewBillForm;

