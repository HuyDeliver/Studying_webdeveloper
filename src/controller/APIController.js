const User = require('../models/user')
const getUsersApi = async (req, res) => {
    let results = await User.find({})

    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const postCreateUserAPI = async (req, res) => {
    const { email, name, city } = req.body
    let user = await User.create({
        email, name, city
    })
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )

}


module.exports = {
    getUsersApi,
    postCreateUserAPI
}