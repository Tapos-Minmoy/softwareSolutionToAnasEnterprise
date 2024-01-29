const db = require('../models');
const {Sequelize, DataTypes} = require('sequelize');

// Access the Bill model
const Bill = db.bills;

// 1. Create a bill
const addBill = async (req, res) => {
  try {
    const bill = await Bill.create(req.body);
    res.status(201).send(bill);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating bill');
  }
};

// 2. Get all bills
const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.findAll({
      order: [['id', 'DESC']], // Sort by ID in descending order
    }); res.status(200).send(bills);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching bills');
  }
};


const getBillsDue = async (req, res) => {
  try {
    const bills = await Bill.findAll({
      where: { DueAmount: { [Sequelize.Op.gt]: 0 } }, // Filter for DueAmount greater than 0
      order: [['id', 'DESC']], // Sort by ID in descending order
    });
    res.status(200).send(bills);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching bills');
  }
};




// await Invoice.destroy({ where: { id } });

// 3. Get a single bill
const getOneBill = async (req, res) => {
  try {
    const id = req.params.id;
    const bill = await Bill.findByPk(id);
    if (!bill) {
      res.status(404).send('Bill not found');
    } else {
      res.status(200).send(bill);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching bill');
  }
};

// 4. Update a bill
const updateBill = async (req, res) => {
  try {
    const id = req.params.id;
    const bill = await Bill.findByPk(id);
    if (!bill) {
      res.status(404).send('Bill not found');
    } else {
      await bill.update(req.body);
      res.status(200).send(bill);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating bill');
  }
};

// 5. Delete a bill by ID
const deleteBill = async (req, res) => {
  try {
    const id = req.params.id;
    await Bill.destroy({ where: { id } });
    res.status(200).send('Bill deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting bill');
  }
};

module.exports = {
  addBill,
  getAllBills,
  getOneBill,
  updateBill,
  deleteBill,
  getBillsDue,
};
