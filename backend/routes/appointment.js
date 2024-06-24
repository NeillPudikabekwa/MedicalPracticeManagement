const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/', async (req, res) => {
    const { patientId, doctorId, date, time } = req.body;
    try {
        const appointment = new Appointment({ patientId, doctorId, date, time });
        await appointment.save();
        res.status(201).send('Appointment scheduled');
    } catch (error) {
        res.status(400).send('Error scheduling appointment');
    }
});

module.exports = router;
