const express = require('express')
const routerAPI = express.Router()
const { getUsersApi, postCreateUserAPI, putUpdateUserAPI } = require('../controller/APIController')


routerAPI.get('/users', getUsersApi)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

module.exports = routerAPI