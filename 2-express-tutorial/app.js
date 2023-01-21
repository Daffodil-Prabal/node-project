const express = require('express')
const app = express()
const { products, people } = require('./data')

app.use(express.static('./'))

app.get('/api/people', (req, res) => {
    res.status(200).json(people)
})

app.listen(5000, () => {
    console.log('server is listening at port 5000...');
})