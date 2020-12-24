const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = ({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    goodlist: {
        type: Array,
        required: true
    },

    badlist: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);