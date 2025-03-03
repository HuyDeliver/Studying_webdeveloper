const { upLoadSingleFile } = require('../services/fileService')
const { createCustomer, createMultiCustomers, getALlCustomer, UpdateCustomer, DeleteCustomerSV } = require('../services/CustomerServices')
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
        let customers = await getALlCustomer()
        return res.status(200).json({
            EC: 0,
            data: customers
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
    }
}