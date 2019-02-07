const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BackgroundSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    skillProficiencies: [
        {
            skill: {
                type: String,
                required: false
            }
        }
    ],
    toolProficiencies: [
        {
            oneTypeTools: [{
                tool: {
                    type: String,
                    required: false
                }
            }],
            tools: [{
                tool: {
                    type: String,
                    required: false
                }
            }]
        }
    ],
    feature: {
        type: String,
        required: false
    },
    equipment: [
        {
            items: [
                {
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
                }
            ],
            oneTypeItems: [
                {
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
                }
            ]
        }
    ],
    currency: [{
        cp: {
            type: Number,
            required: false
        },
        sp: {
            type: Number,
            required: false
        },
        ep: {
            type: Number,
            required: false
        },
        gp: {
            type: Number,
            required: false
        },
        pp: {
            type: Number,
            required: false
        },
    }],
    feature: {
        type: String,
        required: false
    }
})

module.exports = Background = mongoose.model('backgrounds', BackgroundSchema)