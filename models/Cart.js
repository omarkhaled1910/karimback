const Mongoose = require('mongoose')

const CartSchema = new Mongoose.Schema({

    userId: {
        type: String,

    },
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            }

        }
    ]
},
    { timestamps: true }
)

module.exports = Mongoose.model('Cart', CartSchema)