const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LinkSchema = new Schema({
    linkFake: {
        type: String,
        required: true,
        unique: true
    },

    urlRedirect: {
        type: String,
        required: true
    },

    tieudeFB: {
        type: String,
        required: true
    },

    motaFB: {
        type: String,
        required: true
    },

    picFB: {
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('linkFakes', LinkSchema)