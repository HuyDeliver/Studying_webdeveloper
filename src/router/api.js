const express = require('express')
const routerAPI = express.Router()
const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadsinglefile, postUploadmutiplefile } = require('../controller/APIController')

const { postCreateCustomer, postCreateMultiCustomer, getFindAllCustomer, putUpdateCustomer, deleteOneCustomer, deleteMultiCustomer } = require('../controller/customerController')
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

routerAPI.delete('/multicustomers', deleteMultiCustomer)


routerAPI.get('/info', (req, res) => {
    console.log(">>>chekc query", req.query)
    return res.status(200).json({
        EC: 0,
        data: req.query
    })
})

routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>>chekc params", req.params)
    return res.status(200).json({
        EC: 0,
        data: req.params
    })
})
module.exports = routerAPI