const express = require('express')
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const JWT = require('jsonwebtoken')
const Router = express.Router()



Router.post('/register', async (req, res) => {

    const newuser = await User.create({
        name: req.body.name,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
        email: req.body.email,
    })
    const { password, ...others } = newuser._doc

    const token = JWT.sign({ userid: newuser._id, }, process.env.JWT_SECRET, { expiresIn: '3d' })

    res.status(201).json({ ...others, token })



})

Router.post('/login', async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({
        name: req.body.name
    })
    console.log(user);
    !user && res.status(404).json("Wrong credential")

    var decrypted = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
    const hashedPassword = decrypted.toString(CryptoJS.enc.Utf8)

    if (req.body.password === hashedPassword) {
        const { password, ...others } = user._doc

        const accessToken = JWT.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET, { expiresIn: '3d' })

        res.status(200).json({ ...others, accessToken })
        console.log("succesful");
    } else {
        res.status(404).json("Wrong credential")
    }

})



module.exports = Router