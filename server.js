const express = require('express')
const app = express()
const port = 3000
const quotes = require('random-movie-quotes')

app.get('/', (req, res) => res.send(quotes.getQuote()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
