const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
   },
    video: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Exercise', exerciseSchema);

