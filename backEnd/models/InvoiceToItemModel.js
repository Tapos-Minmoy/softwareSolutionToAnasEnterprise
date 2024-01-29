const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const InvoiceToItem = sequelize.define("InvoiceToItem", {
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure InvoiceID is always provided
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure ItemID is always provided
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure Quantity is always provided
      defaultValue: 1, // Default to 1 if not specified
    },
    Rate: {
      type: DataTypes.DECIMAL(10, 2), // Assuming two decimal places for rate
      allowNull: false, // Ensure Rate is always provided
    },
  });

  return InvoiceToItem;
};
