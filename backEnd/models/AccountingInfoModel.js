const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const AccountingInfo = sequelize.define("accountingInfo", {
      AccountName:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      Value: {
        type: DataTypes.INTEGER,
        allowNull: false, // Ensure VendorDisplayName is always provided
        default:0,
      },
    });
  
    // Define a foreign key constraint to the Vendor model
  
    return AccountingInfo;
  };
  