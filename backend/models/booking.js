const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let booking = new Schema({
    username: {
        type: String
    },
    date: {
        type: Date
    },
    propertyId: {
        type: String
    },
    title: {
        type: String
    }
}, {
        collection: 'Bookings'
    })

module.exports = mongoose.model('Bookings', booking)