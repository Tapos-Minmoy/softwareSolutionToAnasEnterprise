const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
    // Required fields
    CustomerDisplayName: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure VendorDisplayName is always provided
    },
    SubTotal: {
      type: DataTypes.DECIMAL(10, 2), // Assuming two decimal places for currency
      allowNull: false, // Ensure SubTotal is always provided
    },
    DueAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, // Ensure DueAmount is always provided
    },
    Discount: {
      type: DataTypes.DECIMAL(4, 2), // Assuming two decimal places for discount
      defaultValue: 0, // Default discount to zero if not provided
    },
    Total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, // Ensure Total is always provided
    },
    DueDate: {
      type: DataTypes.DATEONLY, // Assuming only date is needed
    },
    Date: {
      type: DataTypes.DATEONLY, // Assuming full date and time are needed
      allowNull: false, // Ensure Date is always provided
      defaultValue: Sequelize.TODAY, // Set default to current timestamp
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure Status is always provided
      defaultValue: "Pending", // Set default status
    },
  });

  // Define foreign key constraints to related models (if applicable)
  // Example:
  // Invoice.belongsTo(sequelize.models.Customer);

  return Invoice;
};
