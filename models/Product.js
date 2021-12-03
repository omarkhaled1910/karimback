const Mongoose = require('mongoose')

const ProductSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: [true, "Produt must have a name"],
        unique: true
    },
    desc: {
        type: String,
        required: [true, "Produt must have a desc"],
    },
    img: {
        type: String,
        required: [true, "Produt must have a image"],
    },
    categories: {
        type: Array,
    },
    size: {
        type: Array,
    },
    colors: {
        type: Array,
    },
    price: {
        type: Number,
        required: [true, "Produt must have a price"],
    },
    instock: {
        type: Boolean,
        default: true,
    },
},
    { timestamps: true }
)

module.exports = Mongoose.model('Product', ProductSchema)