
const express = require('express')
const app = express()
process.env.PORT = 1337;

// when browser requests /, sends message
app.get('/', (req, res) => {
    res.send('Hello World!');   
});

// when browser requests /time, sends time
app.get('/time', (req, res) => {
    // new Date gets current time, and is converted to ISO format
    res.send(`Time = ${(new Date()).toISOString()}`);
});

app.listen(8080)
