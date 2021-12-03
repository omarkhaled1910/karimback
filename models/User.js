const Mongoose = require('mongoose')

const UserSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: [true, "user must have a name"],
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: [true, "user must have a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "user must have a password"],
    },

},
    { timestamps: true }
)

module.exports = Mongoose.model('User', UserSchema)