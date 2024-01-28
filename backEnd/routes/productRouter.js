// import controllers review, products
const itemController = require('../controllers/itemController.js')
const vendorController = require('../controllers/vendorController.js')
const billController = require('../controllers/billController.js')
const  billToItems  = require('../controllers/billToItemController.js')
const paymentMadeController = require('../controllers/paymentMadeController.js')
const addAccountingInfoController = require('../controllers/AccountingInfoController.js')
const { Router } = require('express')

// router
const router = require('express').Router()


// use routers

//Item Model
router.post('/addItem', itemController.addItem)
router.get('/getAllItems', itemController.getAllItems)
router.post('/updateItemQuantity',itemController.updateItemQuantity)



//Vendor Model
router.get('/getAllVendors',vendorController.getAllVendors)
router.post('/addVendor',vendorController.addVendor)
router.post('/getVendorsByDisplayName',vendorController.getVendorsByDisplayName)

//BillToItem
router.post('/addItemToBill',billToItems.addItemToBill)

//Bill Model
router.post('/addBill',billController.addBill)
router.get('/getAllBills',billController.getAllBills)

//paymentMade
router.post('/addPayment',paymentMadeController.addPayment)
router.get('/getAllPayments',paymentMadeController.getAllPayments)

//AccountingInfo

router.post('/addAccountingInfo',addAccountingInfoController.addAccountingInfo)
router.post('/updateAccountingInfo',addAccountingInfoController.updateAccountingInfo)
router.post('/getInfoByAccountName',addAccountingInfoController.getInfoByAccountName)


// get product Reviews

module.exports = router