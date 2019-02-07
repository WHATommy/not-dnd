const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
    item: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    }
})

module.exports = Equipment = mongoose.model('equipments', EquipmentSchema)