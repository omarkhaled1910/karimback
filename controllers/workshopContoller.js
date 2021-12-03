const Workshop = require('../models/Workshop')


const getallworkshops = async (req, res) => {


    const workshops = await Workshop.find()

    res.status(200).json(workshops)
}

const createworkshop = async (req, res) => {

    const workshop = await Workshop.create(req.body)

    res.status(200).json(workshop)
}

const getworkshop = async (req, res) => {


    const workshop = await Workshop.findById(req.params.id)

    res.status(200).json(workshop)
}

const updateworkshop = async (req, res) => {

    const updatedworkshop = await Workshop.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

    res.status(200).json(updatedworkshop)
}

const deleteworkshop = async (req, res) => {

    await Workshop.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json("workshop has been deleted")
}



module.exports = {
    getallworkshops,
    createworkshop,
    getworkshop,
    updateworkshop,
    deleteworkshop,
}