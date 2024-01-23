const db = require('../models');


// Create main Model
const Item = db.items; // Assuming you've defined the Item model in your models file


// Main work

// 1. Create item
const addItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating item');
  }
};

// 2. Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching items');
  }
};

// 3. Get single item
const getOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).send('Item not found');
    } else {
      res.status(200).send(item);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching item');
  }
};

// 4. Update item
const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).send('Item not found');
    } else {
      await item.update(req.body);
      res.status(200).send(item);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating item');
  }
};

// 5. Delete item by id
const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await Item.destroy({ where: { id } });
    res.status(200).send('Item deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting item');
  }
};

module.exports = {
  addItem,
  getAllItems,
  getOneItem,
  updateItem,
  deleteItem,
};
