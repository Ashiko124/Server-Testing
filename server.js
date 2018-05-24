


/////////////////////////////////////////////////////////////

const express = require('express');
const Employee = require('./Employee');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({api: 'running!'});
})

server.post('/createEmployee', (req, res) => {
    res.status(201).json({msg: 'Employee Create!'})
})

server.post('/removeEmployee', (req, res) => {
    res.status(201).json({msg: 'Employee Removed'})
})

if(process.env.NODE_ENV !== 'test') {
    server.listen(8000);
}

module.exports = server;