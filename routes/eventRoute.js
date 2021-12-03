const express = require('express')
const { getallevents,
    createevent,
    getevent,
    updateevent,
    deleteevent,
} = require('../controllers/eventController')
const { verifyTokenAndAdmin } = require('../middleware/authentication')

const EventRouter = express.Router()


EventRouter.get('/', getallevents)
EventRouter.post('/', verifyTokenAndAdmin, createevent)
EventRouter.get('/:id', getevent)
EventRouter.put('/:id', verifyTokenAndAdmin, updateevent)
EventRouter.delete('/:id', verifyTokenAndAdmin, deleteevent)




module.exports = EventRouter