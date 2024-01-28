const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('invoice', {
    // Required fields
    CustomerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    InvoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure each invoice has a unique number
    },
    SubTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Tax: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0, // Default tax to zero if not provided
    },
    Total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    InvoiceDate: {
      type: DataTypes.DATE, // Assuming full date and time are needed
      allowNull: false,
      defaultValue: Sequelize.NOW, // Set default to current timestamp
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pending', // Set default status
    },

    // Optional fields
    Notes: {
      type: DataTypes.TEXT,
    },
    DueDate: {
      type: DataTypes.DATE,
    },
    PaymentTerms: {
      type: DataTypes.STRING,
    },
  });

  // Define foreign key constraints to related models (if applicable)
  // Example:
  // Invoice.belongsTo(sequelize.models.Customer);

  return Invoice;
};
