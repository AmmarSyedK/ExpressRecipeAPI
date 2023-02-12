const data = require('./data.json')
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.use(cors());

app.get('/recipes', (req, res) => {
    res.status(200).send(data)
});
