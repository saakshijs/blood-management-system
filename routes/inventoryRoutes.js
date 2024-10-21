const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createInventoryController } = require('../controller/inventoryController')
const router=express.Router()

router.post('/create-inventory',authMiddleware,createInventoryController);

module.exports=router