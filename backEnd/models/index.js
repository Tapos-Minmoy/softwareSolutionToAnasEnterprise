const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.items = require('./itemModel.js')(sequelize,DataTypes)
db.vendors = require('./vendorModel.js')(sequelize,DataTypes)
db.bills=require('./BillModel.js')(sequelize,DataTypes)
db.billToItems=require('./BillToItemModel.js')(sequelize,DataTypes)
db.paymentMades=require('./PaymentMadeModel.js')(sequelize,DataTypes)
db.accountingInfos=require('./AccountingInfoModel.js')(sequelize,DataTypes)
db.customers=require('./customerModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation








module.exports = db
