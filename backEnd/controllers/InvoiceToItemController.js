const db = require('../models');

// Access the InvoiceToItem model
const InvoiceToItem = db.invoiceToItem;

// 1. Add an item to a Invoice
const addItemToInvoice = async (req, res) => {
  try {
    const InvoiceToItems = await InvoiceToItem.create(req.body);
    console.log(req.body);
    res.status(201).send(InvoiceToItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding item to Invoice');
  }
};

// 2. Get all items for a Invoice
const getItemsForInvoice = async (req, res) => {
  try {
    const InvoiceId = req.params.InvoiceId;
    const items = await InvoiceToItem.findAll({
      where: { InvoiceID: InvoiceId },
      include: [
        {
          model: Invoice,
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
    res.status(500).send('Error fetching items for Invoice');
  }
};

// 3. Get a single item from a Invoice (not implemented here, as it's unlikely a common use case)

// 4. Update an item in a Invoice
const updateItemInInvoice = async (req, res) => {
  try {
    const { id, quantity, rate } = req.body;
    const InvoiceToItem = await InvoiceToItem.findByPk(id);
    if (!InvoiceToItem) {
      res.status(404).send('Item not found in Invoice');
    } else {
      await InvoiceToItem.update({ Quantity: quantity, Rate: rate });
      res.status(200).send(InvoiceToItem);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating item in Invoice');
  }
};

// 5. Delete an item from a Invoice
const deleteItemFromInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    await InvoiceToItem.destroy({ where: { id } });
    res.status(200).send('Item deleted from Invoice successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting item from Invoice');
  }
};

module.exports = {
  addItemToInvoice,
  getItemsForInvoice,
  // getOneItemFromInvoice, // Not implemented here
  updateItemInInvoice,
  deleteItemFromInvoice,
};
