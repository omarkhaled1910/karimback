const express = require('express')

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/authentication')
const {
    getallcarts,
    createcart,
    getcart,
    updatecart,
    deletecart,
} = require('../controllers/cartController')

const Router = express.Router()


Router.post('/', createcart)

Router.get('/', verifyTokenAndAdmin, getallcarts)

Router.get('/:id', verifyTokenAndAuthorization, getcart)

Router.put('/:id', verifyTokenAndAuthorization, updatecart)

Router.delete('/:id', verifyTokenAndAuthorization, deletecart)


module.exports = Router