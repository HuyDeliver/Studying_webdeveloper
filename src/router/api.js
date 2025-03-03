const express = require('express')
const routerAPI = express.Router()
const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadsinglefile, postUploadmutiplefile } = require('../controller/APIController')

const { postCreateCustomer, postCreateMultiCustomer, getFindAllCustomer, putUpdateCustomer, deleteOneCustomer } = require('../controller/customerController')
routerAPI.get('/users', getUsersApi)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)




routerAPI.post('/file', postUploadsinglefile)

routerAPI.post('/files', postUploadmutiplefile)



routerAPI.get('/customers', getFindAllCustomer)

routerAPI.post('/customers', postCreateCustomer)

routerAPI.post('/multicustomers', postCreateMultiCustomer)

routerAPI.put('/customers', putUpdateCustomer)

routerAPI.delete('/customers', deleteOneCustomer)

module.exports = routerAPI