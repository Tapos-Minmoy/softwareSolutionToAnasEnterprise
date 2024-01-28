const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PaymentMadeModel = sequelize.define('paymentMade', {
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false, // Ensure Date is always provided
      defaultValue: Sequelize.TODAY, // Set default to current timestamp
    },
    BillID: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure Bill is always associated
    },
    VendorDisplayName: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure VendorDisplayName is always provided
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
 // PaymentMade.belongsTo(Bill, { foreignKey: 'BillID' });

  return PaymentMadeModel;
};
