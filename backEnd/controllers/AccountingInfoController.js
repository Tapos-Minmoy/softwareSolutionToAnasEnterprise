const { INTEGER } = require('sequelize');
const db = require('../models');

// Access the AccountingInfo model
const AccountingInfo = db.accountingInfos;

// 1. Create accounting information
const addAccountingInfo = async (req, res) => {
  try {
    const accountingInfo = await AccountingInfo.create(req.body);
    res.status(201).send(accountingInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating accounting information');
  }
};

// 2. Get all accounting information
const getAllAccountingInfo = async (req, res) => {
  try {
    const accountingInfo = await AccountingInfo.findAll();
    res.status(200).send(accountingInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching accounting information');
  }
};

// 3. Get a single accounting information by ID
const getOneAccountingInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const accountingInfo = await AccountingInfo.findByPk(id);
    if (!accountingInfo) {
      res.status(404).send('Accounting information not found');
    } else {
      res.status(200).send(accountingInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching accounting information');
  }
};

// 4. Update accounting information by ID
const updateAccountingInfo = async (req, res) => {
    try {
      const { AccountName, increment } = req.body; // Extract AccountName and increment from request body
      console.log(increment);
      console.log(req.body);
  
      const accountingInfo = await AccountingInfo.findOne({ where: { AccountName:AccountName } });
      console.log(accountingInfo);
      console.log(accountingInfo.dataValues.AccountName);
      if (!accountingInfo.dataValues.AccountName) {
        res.status(404).send('Accounting information not found');
        return; // Exit early if not found
      }
  
      // Ensure AccountName matches the record being updated (for consistency)
      if (accountingInfo.dataValues.AccountName !== AccountName) {
        res.status(400).send('AccountName in request body does not match existing record');
        return; // Exit if names don't match
      }
  
      // Increase the Value based on the provided increment
      const incrementResult = await accountingInfo.increment('Value', { by:  increment});
  
      res.status(200).send(accountingInfo.dataValues); // Send the updated information
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating accounting information');
    }
  };
  
  
// 5. Delete accounting information by ID
const deleteAccountingInfo = async (req, res) => {
  try {
    const id = req.params.id;
    await AccountingInfo.destroy({ where: { id } });
    res.status(200).send('Accounting information deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting accounting information');
  }
};

const getInfoByAccountName = async (req, res) => {
  try {
    const accountName = req.body.AccountName; // Get vendor display name from request parameters

    console.log(accountName);

    if (!accountName) {
      // Handle missing display name error
      return res.status(400).send('Missing vendor display name.');
    }

    const info = await AccountingInfo.findOne({
      where: { AccountName: accountName },
      attributes: ['id', 'Value'],
    });

    console.log(info);

   // if (!info) {
   //   res.status(200).send('Account Info not found');
  //    return;
   // } else {
      res.status(200).send(info.dataValues);
     // return;
   // }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching vendors');
  }
};

module.exports = {
  addAccountingInfo,
  getAllAccountingInfo,
  getOneAccountingInfo,
  updateAccountingInfo,
  deleteAccountingInfo,
  getInfoByAccountName,
};
