const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url === '/about'){
        res.end('JAI SHREE RAM')
    }
    res.end(`<h1>OOPS!</h1>
    <p>We can't seems to find what you are looking for </p>
    <a href="/">Home</a>`)
})

server.listen(4200)