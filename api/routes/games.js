const express = require('express')
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'We are now on the games route'
    }); 
})

module.exports = router;