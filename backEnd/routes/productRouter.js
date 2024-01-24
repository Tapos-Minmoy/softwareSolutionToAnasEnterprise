// import controllers review, products
const itemController = require('../controllers/itemController.js')
const vendorController = require('../controllers/vendorController.js')
const billController = require('../controllers/billController.js')
const  billToItems  = require('../controllers/billToItemController.js')
const paymentMadeController = require('../controllers/paymentMadeController.js')
const addAccountingInfoController = require('../controllers/AccountingInfoController.js')

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
//BillToItem
router.post('/addItemToBill',billToItems.addItemToBill)
//Bill Model
router.post('/addBill',billController.addBill)
router.get('/getAllBills',billController.getAllBills)

//paymentMade
router.post('/addPayment',paymentMadeController.addPayment)

//AccountingInfo

router.post('/addAccountingInfo',addAccountingInfoController.addAccountingInfo)
router.post('/updateAccountingInfo',addAccountingInfoController.updateAccountingInfo)
router.get('/getAllAccountingInfo',addAccountingInfoController.getAllAccountingInfo)

// get product Reviews

module.exports = router