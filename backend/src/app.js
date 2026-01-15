const express = require('express');
const routes = require('./routes/ai.route');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Express");
})

app.use('/ai', routes);

module.exports = app;