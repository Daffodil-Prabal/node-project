const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./styles.css')
const homeScript = readFileSync('./browser-app.js')
const homeLogo = readFileSync('./logo.svg')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>What do want to know about? </h1>')
        res.end()
    }
    else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo)
        res.end()
    }
    else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homeScript)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Why?</h1>')
        res.end()
    }

})

server.listen(5000)