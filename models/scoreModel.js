const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scoreSchema = new Schema({
    score: {
        type: Number,
        required: false
        },        
    total: {
        type: Number,
        required: false
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Score = mongoose.model('Score', scoreSchema, 'scores')

module.exports = Score;

