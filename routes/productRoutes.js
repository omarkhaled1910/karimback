const express = require('express')

const { verifyTokenAndAdmin } = require('../middleware/authentication')
const {
    getallproducts,
    getproduct,
    updateproduct,
    deleteproduct,
    createproduct,
} = require('../controllers/productController')

const Router = express.Router()


Router.get('/', getallproducts)

Router.post('/', verifyTokenAndAdmin, createproduct)

Router.get('/:id', getproduct)

Router.put('/:id', verifyTokenAndAdmin, updateproduct)

Router.delete('/:id', verifyTokenAndAdmin, deleteproduct)


module.exports = Router