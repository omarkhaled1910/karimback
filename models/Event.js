const Mongoose = require('mongoose')

const EventSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: [true, "Event must have a name"],
        unique: true
    },
    desc: {
        type: String,
        required: [true, "Event must have a desc"],
    },
    img: {
        type: Array,
        required: [true, "Event must have a image"],
    },
    maxpart: {
        type: Number,
        required: [true, "Event must have a price"],
    },
    price: {
        type: Number,
        required: [true, "Event must have a price"],
    },
    time: {
        type: String,
        default: true,
    },
},
    { timestamps: true }
)

module.exports = Mongoose.model('Event', EventSchema)