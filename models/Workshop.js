const Mongoose = require('mongoose')

const WorkshopSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: [true, "workshop must have a name"],
        unique: true
    },
    desc: {
        type: String,
        required: [true, "workshop must have a desc"],
    },
    img: {
        type: Array,
        required: [true, "workshop must have a image"],
    },
    maxpart: {
        type: Number,
        required: [true, "workshop must have a price"],
    },
    price: {
        type: Number,
        required: [true, "workshop must have a price"],
    },
    time: {
        type: String,
        default: true,
    },
},
    { timestamps: true }
)

module.exports = Mongoose.model('Workshop', WorkshopSchema)