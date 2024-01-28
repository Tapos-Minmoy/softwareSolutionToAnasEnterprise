const db = require('../models');

const Customer = db.customers; // Assuming "customers" is your model name

// 1. Create Customer
const addCustomer = async (req, res) => {
 try {
   const customer = await Customer.create(req.body);
   res.status(201).send(customer);
 } catch (error) {
   console.error(error);
   res.status(502).send('Error creating customer');
 }
};

// 2. Get all Customers
const getAllCustomers = async (req, res) => {
 try {
   const customers = await Customer.findAll();
   res.status(200).send(customers);
 } catch (error) {
   console.error(error);
   res.status(500).send('Error fetching customers');
 }
};

// 3. Get single Customer
const getOneCustomer = async (req, res) => {
 try {
   const id = req.params.id;
   const customer = await Customer.findByPk(id);

   if (!customer) {
     res.status(404).send('Customer not found');
   } else {
     res.status(200).send(customer);
   }
 } catch (error) {
   console.error(error);
   res.status(500).send('Error fetching customer');
 }
};

// 4. Update Customer
const updateCustomer = async (req, res) => {
 try {
   const id = req.params.id;
   const customer = await Customer.findByPk(id);

   if (!customer) {
     res.status(404).send('Customer not found');
   } else {
     await customer.update(req.body);
     res.status(200).send(customer);
   }
 } catch (error) {
   console.error(error);
   res.status(500).send('Error updating customer');
 }
};

// 5. Delete Customer by ID
const deleteCustomer = async (req, res) => {
 try {
   const id = req.params.id;
   await Customer.destroy({ where: { id } });
   res.status(200).send('Customer deleted successfully');
 } catch (error) {
   console.error(error);
   res.status(500).send('Error deleting customer');
 }
};

// 6. Get Customers by Display Name
const getCustomersByDisplayName = async (req, res) => {
 try {
   const displayName = req.body.displayName;

   if (!displayName) {
     return res.status(400).send('Missing customer display name.');
   }

   const customers = await Customer.findAll({
     where: { CustomerDisplayName: displayName },
     attributes: [
       'id',
       'CustomerName',
       'Reference',
       'Address',
       'CustomerDisplayName',
       'EmailAddress',
       'PhoneNumber',
     ],
   });

   if (!customers.length) {
     res.status(200).send('Customer not found');
   } else {
     res.status(200).send(customers);
   }
 } catch (error) {
   console.error(error);
   res.status(500).send('Error fetching customers');
 }
};

module.exports = {
 addCustomer,
 getAllCustomers,
 getOneCustomer,
 updateCustomer,
 deleteCustomer,
 getCustomersByDisplayName,
};
