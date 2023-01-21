const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => [
    res.send('<h1>Home Page</h1> <a href = "/api/products"> Products</a>')
])

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:id', (req, res) => {
    const singleProduct = products.find((e) => e.id === +req.params.id)
    if (!singleProduct) {
        res.status(404).send('Product does not exists')
    }
    res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, +limit)
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No Product matches your search.')
        res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
    // res.send('hello world');
})

app.listen(5000, () => {
    console.log('server is listening at port 5000...');
})