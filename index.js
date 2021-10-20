const dotenv = require('dotenv')
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const PORT = process.env.PORT || 3002
const server = express()

dotenv.config()

server.listen(PORT, () => console.log(`**Server listening on port ${PORT}**`))
