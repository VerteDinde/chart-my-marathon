'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: '.'});
});

function loadArticles() {
    client.query('SELECT COUNT(*) FROM runnerdata')
    .then(results => {
        if (!parseInt(results.rows[0].count)) {
            
        }
    })
}