
const Order = require('../models/Order')


const getallorders = async (req, res) => {


    const orders = await Order.find()

    res.status(200).json(orders)
}

const getorder = async (req, res) => {

    const orders = await Order.find({ userId: req.params.id })

    res.status(200).json(orders)
}

const createorder = async (req, res) => {

    const order = await Order.create(req.body)

    res.status(200).json(order)
}

const updateorder = async (req, res) => {

    const updatedorder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedorder)
}

const deleteorder = async (req, res) => {

    await Order.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json("order has been deleted")
}

const income = async (req, res) => {

    const date = new Date()
    const lastmonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousmonth = new Date(new Date().setMonth(lastmonth.getMonth() - 1))

    const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousmonth } } },
        { $project: { month: { $month: "$createdAt" }, sales: { sales: "$amount" } } },
        { $group: { _id: "$month", total: { $sum: "$sales" } } }
    ])

    res.status(200).json(income)
}

module.exports = {
    getallorders,
    createorder,
    getorder,
    updateorder,
    deleteorder,
    income
}