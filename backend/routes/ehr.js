const express = require('express');
const EHR = require('../models/EHR');

const router = express.Router();

router.post('/', async (req, res) => {
    const { patientId, records } = req.body;
    try {
        const ehr = new EHR({ patientId, records });
        await ehr.save();
        res.status(201).send('EHR created');
    } catch (error) {
        res.status(400).send('Error creating EHR');
    }
});

module.exports = router;
