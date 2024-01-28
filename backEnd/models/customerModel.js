const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("customer", {
        CustomerName: { // Renamed from Name
            type: DataTypes.STRING,
            allowNull: false, // Ensure CustomerName is always provided
        },
        Reference: { // New field for customer reference
            type: DataTypes.STRING,
        },
        Address: { // New field for customer address
            type: DataTypes.STRING,
        },
        CustomerDisplayName: {
            type: DataTypes.STRING,
            unique: true, // Ensure unique display names
        },
        EmailAddress: {
            type: DataTypes.STRING,
        },
        PhoneNumber: {
            type: DataTypes.STRING,
        },
    });

    return Customer;
};
