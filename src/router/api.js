const express = require('express')
const routerAPI = express.Router()
const { getUsersApi } = require('../controller/APIController')

routerAPI.get('/', (req, res) => {
    res.send('hello api')
})

routerAPI.get('/users', getUsersApi)

module.exports = routerAPI