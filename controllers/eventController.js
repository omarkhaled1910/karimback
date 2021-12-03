const Event = require('../models/Event')


const getallevents = async (req, res) => {


    const events = await Event.find()

    res.status(200).json(events)
}

const createevent = async (req, res) => {

    const event = await Event.create(req.body)

    res.status(200).json(event)
}

const getevent = async (req, res) => {

    console.log(req.params.id);
    const event = await Event.findById(req.params.id)

    res.status(200).json(event)
}

const updateevent = async (req, res) => {

    const updatedevent = await Event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

    res.status(200).json(updatedevent)
}

const deleteevent = async (req, res) => {

    await Event.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json("event has been deleted")
}



module.exports = {
    getallevents,
    createevent,
    getevent,
    updateevent,
    deleteevent,
}