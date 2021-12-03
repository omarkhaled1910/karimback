const Mongoose = require('mongoose')

const OrderSchema = new Mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
    address: {
        type: String,

    }
},
    { timestamps: true })

module.exports = Mongoose.model('Order', OrderSchema)