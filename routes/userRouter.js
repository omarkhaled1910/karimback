const express = require('express')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/authentication')
const { updateuser, deleteuser, getuser, getallusers, getuserstats } = require('../controllers/userController')

const Router = express.Router()

Router.get('/', verifyTokenAndAdmin, getallusers)

Router.get('/stats', verifyTokenAndAdmin, getuserstats)

Router.get('/:id', verifyTokenAndAdmin, getuser)

Router.put('/:id', verifyTokenAndAuthorization, updateuser)

Router.delete('/:id', verifyTokenAndAuthorization, deleteuser)

module.exports = Router