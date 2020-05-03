const express = require('express')
const router = express.Router();

//Sve je routano preko app.js na console, i cim je routano na console, prosli smo glavni route
//tako da sad ovdje mozemo sve sto ide na /console, zapisati kao samo / jer smo vec na console ruti
//url / will target urls aim at /consoles

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'We are GETING on /console'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'We are POSTING on /console'
    })
});

module.exports = router;

