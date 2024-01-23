module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    ItemName: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure ItemName is always provided
    },
    ItemCategory: {
      type: DataTypes.STRING,
    },
    Unit: {
      type: DataTypes.STRING,
    },
    Quantity: {
        type: DataTypes.FLOAT,
    }
  });

  return Item;
};
