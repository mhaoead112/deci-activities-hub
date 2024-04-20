const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))

// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, './client/pages/user.html'));
})
app.get('/gg', async (req, res) => {
    res.sendFile(path.join(__dirname, './users.js'));
})
app.get('/style', async (req, res) => {
    res.sendFile(path.join(__dirname, './client/pages/user.css'));
})
app.get('/users', async (req, res) => {
    // Write your logic here
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json()
    res.send(data);
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))