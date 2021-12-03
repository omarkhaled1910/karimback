const express = require('express')
const {
    getallworkshops,
    createworkshop,
    getworkshop,
    updateworkshop,
    deleteworkshop,
} = require('../controllers/workshopContoller')
const { verifyTokenAndAdmin } = require('../middleware/authentication')

const workshopRouter = express.Router()


workshopRouter.get('/', getallworkshops)
workshopRouter.post('/', verifyTokenAndAdmin, createworkshop)
workshopRouter.get('/:id', getworkshop)
workshopRouter.put('/:id', verifyTokenAndAdmin, updateworkshop)
workshopRouter.delete('/:id', verifyTokenAndAdmin, deleteworkshop)




module.exports = workshopRouter