const Customer = require('../models/customer')
const aqp = require('api-query-params');

module.exports = {
    createCustomer: async (customerData) => {
        console.log(customerData)
        try {
            let results = await Customer.create({
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                description: customerData.description,
                image: customerData.image,
            })
            return results
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    createMultiCustomers: async (arr) => {
        try {
            let result = await Customer.insertMany(arr)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    },
    getALlCustomer: async (limit, page, name, queryString) => {
        try {
            let results = null
            if (limit && page) {
                let offset = (page - 1) * limit
                const { filter, skip } = aqp(queryString);
                delete filter.page
                console.log(">>>check filter: ", filter)
                results = await Customer.find(filter).skip(offset).limit(limit).exec()
            } else {
                results = await Customer.find({})
            }
            return results
        } catch (error) {
            console.log(error)
            return null
        }
    },
    UpdateCustomer: async (id, name, email, address) => {
        try {
            let results = await Customer.updateOne({ _id: id }, { name: name, email: email, address: address })
            return results
        } catch (error) {
            console.log(error)
            return null
        }
    },
    DeleteCustomerSV: async (id) => {
        try {
            let results = await Customer.deleteById({ _id: id })
            return results
        } catch (error) {
            console.log(error)
            return null
        }
    },
    DeleteMultiCustomerSV: async (arrId) => {
        try {
            let results = await Customer.delete({ _id: { $in: arrId } })
            return results
        } catch (error) {
            console.log(error)
            return null
        }
    }

}