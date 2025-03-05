const Customer = require('../models/customer')

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
    getALlCustomer: async () => {
        try {
            let results = await Customer.find({})
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