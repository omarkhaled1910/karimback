const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const Router = express.Router();


Router.post('/payment', (req, res) => {

    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",


    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            console.log(stripeErr);
        } else {
            res.status(200).json(stripeRes)
        }
    })

})


Router.get('',)

module.exports = Router