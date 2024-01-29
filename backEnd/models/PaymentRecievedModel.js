const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PaymentRecievedModel = sequelize.define('paymentRecieved', {
    Date: {
      type: DataTypes.DATEONLY,
  //    allowNull: false, // Ensure Date is always provided
      defaultValue: Sequelize.TODAYONLY, // Set default to current timestamp
    },
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure Invoice is always associated
    },
    CustomerDisplayName: {
      type: DataTypes.STRING,
     // allowNull: false, // Ensure CurstomerDisplayName is always provided
    },
    Mode: {
      type: DataTypes.STRING,
    },
    Amount: {
      type: DataTypes.DECIMAL(10, 2), // Assuming two decimal places for currency
      allowNull: false, // Ensure Amount is always provided
    },
  });

  // Define foreign key constraints for relationships
 // PaymentRecieved.belongsTo(Invoice, { foreignKey: 'InvoiceID' });

  return PaymentRecievedModel;
};
