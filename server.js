'use strict';
const express = require('express');
const bodyParser = require('body-parser'); // Parse incoming requests data 
const app = express();

app.use(bodyParser.json());
const managedRecords = require('./api/managed-records');


function getData(limit, offset) {
    
}

app.get('/records/:pageNumber',managedRecords.getRecords);


var server = app.listen(process.env.PORT || '3001', function () {
    console.log('Server running on port ', server.address().port);
});