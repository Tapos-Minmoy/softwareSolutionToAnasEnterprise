// import controllers review, products
const itemController = require('../controllers/itemController.js')
const vendorController = require('../controllers/vendorController.js')
const billController = require('../controllers/billController.js')
const  billToItems  = require('../controllers/billToItemController.js')
const paymentMadeController = require('../controllers/paymentMadeController.js')
const addAccountingInfoController = require('../controllers/AccountingInfoController.js')
const invoiceController =require('../controllers/InvoiceController.js')
const invoiceToItemController=require('../controllers/InvoiceToItemController.js')
const  customerController=require('../controllers/customerController.js')
const paymentRecievedController=require('../controllers/PaymentRecievedController.js')
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

//paymentRecieved
router.post('/recievePayment',paymentRecievedController.addPayment)


//AccountingInfo

router.post('/addAccountingInfo',addAccountingInfoController.addAccountingInfo)
router.post('/updateAccountingInfo',addAccountingInfoController.updateAccountingInfo)
router.post('/getInfoByAccountName',addAccountingInfoController.getInfoByAccountName)


//invoice mode
router.post('/addInvoice',invoiceController.addInvoice)

//invoiceToItemModel
router.post('/addItemToInvoice',invoiceToItemController.addItemToInvoice)

// get product Reviews

//Customer Model

router.post('/addCustomer',customerController.addCustomer)
router.post('/getCustomersByDisplayName',customerController.getCustomersByDisplayName)
router.get('/getAllCustomers',customerController.getAllCustomers) 



router.post

module.exports = router