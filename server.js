const express = require('express')
const app = express()
const port = 3000
const Quote = require('inspirational-quotes');

app.get('/', (req, res) => res.send(Quote.getRandomQuote()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
