const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String,
    answer: String,
    qlink: String,
    multiple_choice: [String],
    topics: [String],
    date_created: { type: Date, default: Date.now },
    date_updated: { type: Date, default: Date.now },
    difficulty: { type: Number, default: 1 }
});

module.exports = mongoose.model('Question', questionSchema);