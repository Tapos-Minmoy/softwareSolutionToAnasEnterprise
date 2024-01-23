module.exports = (sequelize, DataTypes) => {
    const Vendor = sequelize.define("vendor", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false, // Ensure Name is always provided
      },
      VendorDisplayName: {
        type: DataTypes.STRING,
        allowNull: false, // Ensure VendorDisplayName is always provided
        unique: true, // Ensure unique email addresses
      },
      CompanyName: {
        type: DataTypes.STRING,
      },
      EmailAddress: {
        type: DataTypes.STRING,
      },
      PhoneNumber: {
        type: DataTypes.STRING,
      },
    });
  
    return Vendor;
  };
  