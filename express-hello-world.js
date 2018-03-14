
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');   
});
app.get('/time', (req, res) => {
    // req.requestedTime = Date.now();
    res.send('Hello World!');
});
app.listen(8080)
