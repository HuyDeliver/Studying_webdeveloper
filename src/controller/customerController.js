const { upLoadSingleFile } = require('../services/fileService')
const { createCustomer, createMultiCustomers, getALlCustomer, UpdateCustomer, DeleteCustomerSV, DeleteMultiCustomerSV } = require('../services/CustomerServices')
const aqp = require('api-query-params');
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description, image } = req.body
        let UrlPath = ''
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let results = await upLoadSingleFile(req.files.image)
            UrlPath = results.path
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: UrlPath
        }

        let customer = await createCustomer(customerData)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    postCreateMultiCustomer: async (req, res) => {
        let customers = await createMultiCustomers(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }

    },
    getFindAllCustomer: async (req, res) => {

        let limit = req.query.limit
        let page = req.query.page
        let name = req.query.name
        let results = null
        if (limit && page) {
            results = await getALlCustomer(limit, page, name, req.query)
        } else {
            results = await getALlCustomer()
        }
        return res.status(200).json({
            EC: 0,
            data: results
        })
    },

    putUpdateCustomer: async (req, res) => {
        let { id, name, email, address } = req.body
        let customer = await UpdateCustomer(id, name, email, address)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    deleteOneCustomer: async (req, res) => {
        let id = req.body.id
        let result = await DeleteCustomerSV(id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteMultiCustomer: async (req, res) => {
        let id = req.body.customerID
        let results = await DeleteMultiCustomerSV(id)
        return res.status(200).json({
            EC: 0,
            data: results
        })
    }
}