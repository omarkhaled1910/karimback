const express = require('express')

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/authentication')
const {
    getallorders,
    createorder,
    getorder,
    updateorder,
    deleteorder,
    income
} = require('../controllers/orderController')

const Router = express.Router()


Router.get('/', verifyTokenAndAdmin, getallorders)

Router.post('/', verifyTokenAndAuthorization, createorder)

Router.get('/:id', verifyTokenAndAuthorization, getorder)

Router.put('/:id', verifyTokenAndAdmin, updateorder)

Router.delete('/:id', verifyTokenAndAdmin, deleteorder)

Router.delete('/:income', verifyTokenAndAdmin, income)


module.exports = Router