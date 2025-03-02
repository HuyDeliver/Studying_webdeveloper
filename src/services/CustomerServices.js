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
    }
}