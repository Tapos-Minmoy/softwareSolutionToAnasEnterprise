// import controllers review, products
const itemController = require('../controllers/itemController.js')
const vendorController = require('../controllers/vendorController.js')

// router
const router = require('express').Router()


// use routers

//Item Model
router.post('/addItem', itemController.addItem)
router.get('/getAllItems', itemController.getAllItems)




//Vendor Model
router.get('/getAllVendors',vendorController.getAllVendors)
router.post('/addVendor',vendorController.addVendor)
router.post('/getVendorsByDisplayName',vendorController.getVendorsByDisplayName)
// Review Url and Controller


// get product Reviews

module.exports = router