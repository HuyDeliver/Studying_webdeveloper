const express = require('express')
const routerAPI = express.Router()
const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadsinglefile, postUploadmutiplefile } = require('../controller/APIController')


routerAPI.get('/users', getUsersApi)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadsinglefile)

routerAPI.post('/files', postUploadmutiplefile)


module.exports = routerAPI