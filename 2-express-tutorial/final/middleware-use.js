const express = require('express')
const app = express()
const { products } = require('./data')
const logger = require('./logger')
const morgan = require('morgan')
const authorize = require('./authorize')
// req => middleware => res
app.use(morgan('tiny'))
// app.use('/api', logger)
// app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/product', (req, res) => {
    res.send('Product')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening at port 5000...');
})