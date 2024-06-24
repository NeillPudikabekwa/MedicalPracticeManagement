const mongoose = require('mongoose');

const EHRSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    records: [{
        date: { type: Date, required: true },
        details: { type: String, required: true }
    }]
});

module.exports = mongoose.model('EHR', EHRSchema);
