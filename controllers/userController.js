const User = require('../models/User')
const CryptoJS = require('crypto-js')

const updateuser = async (req, res) => {

    console.log(req.user, req.params);
    if (req.body.password) {

        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }
    const updateduser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    res.status(200).json(updateduser)

}

const deleteuser = async (req, res) => {

    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("user has been deleted")
}

const getuser = async (req, res) => {

    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
}

const getallusers = async (req, res) => {
    const query = req.query.new
    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
    console.log(users);
    const { password, ...others } = users
    res.status(200).json(users)
}

const getuserstats = async (req, res) => {
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.getFullYear() - 1))
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastyear } } },
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", total: { $sum: 1 } } }
        ])
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json(err)

    }
}




module.exports = {
    updateuser,
    deleteuser,
    getuser,
    getallusers,
    getuserstats,
}