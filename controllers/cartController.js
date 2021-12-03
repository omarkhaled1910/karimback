
const Cart = require('../models/Cart')


const getallcarts = async (req, res) => {


    const carts = await Cart.find()

    res.status(200).json(carts)
}

const createcart = async (req, res) => {

    const cart = await Cart.create(req.body)

    res.status(200).json(cart)
}

const getcart = async (req, res) => {


    const cart = await Cart.findOne({ userId: req.params.id })

    res.status(200).json(cart)
}

const updatecart = async (req, res) => {

    const updatedcart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

    res.status(200).json(updatedcart)
}

const deletecart = async (req, res) => {

    await Cart.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json("cart has been deleted")
}



module.exports = {
    getallcarts,
    createcart,
    getcart,
    updatecart,
    deletecart,
}