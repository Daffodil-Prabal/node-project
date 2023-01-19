const express = require('express')
const app = express()

//app.get
//app.put
//app.post
//app.delete
//app.use
//app.lister
//app.all

app.get('/', (req, res) => {
    console.log('user hit the server');
    res.send('Home Page');
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000, () => {
    console.log(`server is listening on port 5000`);
})