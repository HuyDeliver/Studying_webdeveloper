const express = require('express')
const routerAPI = express.Router()
const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadsinglefile, postUploadmutiplefile } = require('../controller/APIController')

const { postCreateCustomer, postCreateMultiCustomer } = require('../controller/customerController')
routerAPI.get('/users', getUsersApi)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)




routerAPI.post('/file', postUploadsinglefile)

routerAPI.post('/files', postUploadmutiplefile)



routerAPI.post('/customers', postCreateCustomer)

routerAPI.post('/multicustomers', postCreateMultiCustomer)

module.exports = routerAPI