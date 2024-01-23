const db = require('../models'); // Requires access to your models

// Define main Model using sequelize model instance
const Vendor = db.vendors; // Assuming "vendors" is your model name

// Main work

// 1. Create Vendor
const addVendor = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body); // Creates a new vendor from request body
    res.status(201).send(vendor); // Sends created vendor with status 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(502).send('Error creating vendor'); // Handle errors with status 500 (Internal Server Error)
  }
};

// 2. Get all Vendors
const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll(); // Find all vendors
    res.status(200).send(vendors); // Send all vendors with status 200 (OK)
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching vendors'); // Handle errors
  }
};

// 3. Get single Vendor
const getOneVendor = async (req, res) => {
  try {
    const id = req.params.id; // Get vendor ID from request parameters
    const vendor = await Vendor.findByPk(id); // Find vendor by ID

    if (!vendor) {
      res.status(404).send('Vendor not found'); // Send not found response if vendor doesn't exist
    } else {
      res.status(200).send(vendor); // Send found vendor with status 200
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching vendor'); // Handle errors
  }
};

// 4. Update Vendor
const updateVendor = async (req, res) => {
  try {
    const id = req.params.id; // Get vendor ID from request parameters
    const vendor = await Vendor.findByPk(id); // Find vendor by ID

    if (!vendor) {
      res.status(404).send('Vendor not found'); // Send not found response if vendor doesn't exist
    } else {
      await vendor.update(req.body); // Update vendor with data from request body
      res.status(200).send(vendor); // Send updated vendor with status 200
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating vendor'); // Handle errors
  }
};



  
// 5. Delete Vendor by ID
const deleteVendor = async (req, res) => {
  try {
    const id = req.params.id; // Get vendor ID from request parameters
    await Vendor.destroy({ where: { id } }); // Destroy vendor with matching ID
    res.status(200).send('Vendor deleted successfully'); // Send success message with status 200
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting vendor'); // Handle errors
  }
};

const getVendorsByDisplayName = async (req, res) => {
  try {
    const displayName = req.body.displayName; // Get vendor display name from request parameters

    console.log(displayName);

    if (!displayName) {
      // Handle missing display name error
      return res.status(400).send('Missing vendor display name.');
    }

    const vendors = await Vendor.findAll({
      where: { VendorDisplayName: displayName },
      attributes: ['id', 'Name', 'CompanyName', 'EmailAddress', 'PhoneNumber'],
    });

    console.log(vendors+" here I am");

    if (!vendors.length) {
      res.status(200).send('Vendor not found');
      return;
    } else {
      res.status(200).send(vendors);
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching vendors');
  }
};


module.exports = {
  addVendor,
  getAllVendors,
  getOneVendor,
  updateVendor,
  deleteVendor,
  getVendorsByDisplayName
};
