const db = require('../models');

// Access the PaymentMade model
const PaymentMade = db.paymentMades;

// 1. Create a payment
const addPayment = async (req, res) => {
    console.log(req.body);
  try {
    const payment = await PaymentMade.create(req.body);
    res.status(201).send(payment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating payment');
  }
};

// 2. Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentMade.findAll();
    res.status(200).send(payments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching payments');
  }
};

// 3. Get a single payment by ID
const getOnePayment = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await PaymentMade.findByPk(id);
    if (!payment) {
      res.status(404).send('Payment not found');
    } else {
      res.status(200).send(payment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching payment');
  }
};

// 4. Update a payment by ID
const updatePayment = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await PaymentMade.findByPk(id);
    if (!payment) {
      res.status(404).send('Payment not found');
    } else {
      await payment.update(req.body);
      res.status(200).send(payment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating payment');
  }
};

// 5. Delete a payment by ID
const deletePayment = async (req, res) => {
  try {
    const id = req.params.id;
    await PaymentMade.destroy({ where: { id } });
    res.status(200).send('Payment deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting payment');
  }
};

module.exports = {
  addPayment,
  getAllPayments,
  getOnePayment,
  updatePayment,
  deletePayment,
};
