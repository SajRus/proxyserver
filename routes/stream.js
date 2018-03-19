const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function (req, res, next) {
    const dataUrl = process.env.API_BASE_URL + '/api/questions/stream' ;
    axios.get(dataUrl).then(
        response => {
            res.send({ success: true, message: 'Data found', body: response.data.response });
        }
    ).catch(error => {
        res.send({ success: false, message: `Error ${error.code}` });
    })
});

module.exports = router;