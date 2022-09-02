const express = require('express');
const server = express()
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.status(200).send('Successfully run server!!')
})

server.listen(() => {
    console.log(`Listening port: ${port}`)
})