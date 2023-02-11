const data = require('./data.json')
const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.use(express.json());

app.get('/recipes', (req, res) => {
    res.status(200).send(data)
});