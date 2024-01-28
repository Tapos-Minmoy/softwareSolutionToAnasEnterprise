const db = require('../models');

// Access the Invoice model
const Invoice = db.invoices;

// 1. Create an invoice
const addInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).send(invoice);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating invoice');
  }
};

// 2. Get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll({
      order: [['InvoiceDate', 'DESC']], // Sort by InvoiceDate in descending order
    });
    res.status(200).send(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching invoices');
  }
};

// 3. Get a single invoice
const getOneInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) {
      res.status(404).send('Invoice not found');
    } else {
      res.status(200).send(invoice);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching invoice');
  }
};

// 4. Update an invoice
const updateInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) {
      res.status(404).send('Invoice not found');
    } else {
      await invoice.update(req.body);
      res.status(200).send(invoice);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating invoice');
  }
};

// 5. Delete an invoice by ID
const deleteInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    await Invoice.destroy({ where: { id } });
    res.status(200).send('Invoice deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting invoice');
  }
};

module.exports = {
  addInvoice,
  getAllInvoices,
  getOneInvoice,
  updateInvoice,
  deleteInvoice,
};
