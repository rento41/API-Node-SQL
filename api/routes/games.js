const express = require('express')
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'We are GETING on /games'
    }); 
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'We are POSTING on /games'
    })
});

module.exports = router;