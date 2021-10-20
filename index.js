const dotenv = require('dotenv')
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

dotenv.config()

const PORT = process.env.PORT || 3002
const server = express()

const articles = []

const sites = [
    {
        name: 'independentUk',
        address: 'https://www.independent.co.uk/topic/xbox',
        base: 'https://www.independent.co.uk'
    }, 
    {
        name: 'independentUk',
        address: 'https://www.independent.co.uk/topic/ps5',
        base: 'https://www.independent.co.uk'
    },
    {
        name: 'gamerant',
        address: 'https://gamerant.com/gaming/',
        base: 'https://gamerant.com'
    },
    {
        name: 'theverge',
        address: 'https://www.theverge.com/games',
        base: 'https://www.theverge.com'
    },
    {
        name: 'independentUk',
        address: 'https://www.independent.co.uk/topic/nintendo',
        base: 'https://www.independent.co.uk'
    }
]

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("Xbox")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name,
                }) 
            })
            
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("PS5")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name
                }) 
            })
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("Sony")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name
                }) 
            })
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("Microsoft")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name
                }) 
            })
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("Nintendo")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name
                }) 
            })
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("Switch")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name
                }) 
            })
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

sites.forEach((site) => {
    axios.get(site.address)
        .then((res) => {
            const html = res.data
            const $ = cheerio.load(html)
            $('a:contains("Nintendo")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title: title,
                    url: site.base + url,
                    source: site.name
                }) 
            })
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
        })
})

server.get('/', (req, res) => {
    res.json('Welcome to my API')
})

server.get('/news', (req, res) => {
    res.json(articles)
})

server.listen(PORT, () => console.log(`**Server listening on port ${PORT}**`))
