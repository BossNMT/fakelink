const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserHackSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    countryCode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userHacks', UserHackSchema)