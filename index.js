const dotenv = require('dotenv')
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const PORT = process.env.PORT || 3002
const server = express()

const articles = []

dotenv.config()

server.get('/', (req, res) => {
    res.json('Welcome to my API')
})

server.get('/xbox', (req, res) => {
    axios.get('https://www.independent.co.uk/topic/xbox')
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('a:contains("Xbox")', html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')
            articles.push({
                title: title,
                url: url
            }) 
        })
        res.json(articles)
    })
    .catch((err) => {
        console.log({message: err.message, stack: err.stack})
    })
})

server.get('/ps5', (req, res) => {
    axios.get('https://www.independent.co.uk/topic/ps5')
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('a:contains("PS5")', html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')
            articles.push({
                title: title,
                url: url
            }) 
        })
        res.json(articles)
    })
    .catch((err) => {
        console.log({message: err.message, stack: err.stack})
    })
})


server.get('/news', (req, res) => {
    axios.get('https://www.independent.co.uk/life-style/gadgets-and-tech/gaming')
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        $('a:contains("Game")', html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')
            articles.push({
                title: title,
                url: url
            }) 
        })
        res.json(articles)
    })
    .catch((err) => {
        console.log({message: err.message, stack: err.stack})
    })
})


server.listen(PORT, () => console.log(`**Server listening on port ${PORT}**`))
