const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;