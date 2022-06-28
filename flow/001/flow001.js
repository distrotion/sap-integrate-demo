const express = require("express");
const router = express.Router();
var mongodb = require('./../../function/mongodb');
var request = require('request');
var axios = require('axios');


router.get('/flow001', async (req, res) => {

    return res.json("testflow1");
})

router.post('/sap-filter', async (req, res) => {
    //-------------------------------------
    console.log(req.body);
    input = req.body;
    output = ''
    //-------------------------------------

    try {
        let resp = await axios.post('http://172.101.1.19/API_QcReport/ZBAPI_getZPPIN013_OUT', input);
       
        if(resp.status == 200){

            output = JSON.parse(resp.data);
        }
        // console.log(resp.data)
    } catch (err) {
        throw getError(err);
    }


    //-------------------------------------
    return res.json(output);
});


module.exports = router;
