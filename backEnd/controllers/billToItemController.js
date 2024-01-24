const db = require('../models');

// Access the BillToItem model
const BillToItem = db.billToItems;

// 1. Add an item to a bill
const addItemToBill = async (req, res) => {
  try {
    const billToItem = await BillToItem.create(req.body);
    res.status(201).send(billToItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding item to bill');
  }
};

// 2. Get all items for a bill
const getItemsForBill = async (req, res) => {
  try {
    const billId = req.params.billId;
    const items = await BillToItem.findAll({
      where: { BillID: billId },
      include: [
        {
          model: Bill,
          attributes: ['VendorDisplayName'], // Include vendor name for convenience
        },
        {
          model: Item,
          attributes: ['Name'], // Include item name for clarity
        },
      ],
    });
    res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching items for bill');
  }
};

// 3. Get a single item from a bill (not implemented here, as it's unlikely a common use case)

// 4. Update an item in a bill
const updateItemInBill = async (req, res) => {
  try {
    const { id, quantity, rate } = req.body;
    const billToItem = await BillToItem.findByPk(id);
    if (!billToItem) {
      res.status(404).send('Item not found in bill');
    } else {
      await billToItem.update({ Quantity: quantity, Rate: rate });
      res.status(200).send(billToItem);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating item in bill');
  }
};

// 5. Delete an item from a bill
const deleteItemFromBill = async (req, res) => {
  try {
    const id = req.params.id;
    await BillToItem.destroy({ where: { id } });
    res.status(200).send('Item deleted from bill successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting item from bill');
  }
};

module.exports = {
  addItemToBill,
  getItemsForBill,
  // getOneItemFromBill, // Not implemented here
  updateItemInBill,
  deleteItemFromBill,
};
