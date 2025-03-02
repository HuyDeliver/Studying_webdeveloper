const { upLoadSingleFile } = require('../services/fileService')
const { createCustomer, createMultiCustomers } = require('../services/CustomerServices')
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
}