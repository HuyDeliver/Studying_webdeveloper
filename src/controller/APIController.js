const User = require('../models/user')
const { upLoadSingleFile, upLoadMultiFile } = require('../services/fileService')
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

const putUpdateUserAPI = async (req, res) => {
    const { userId, userName, userEmail, userCity } = req.body
    let user = await User.updateOne({ _id: userId }, { name: userName, email: userEmail, city: userCity })
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

const deleteUserAPI = async (req, res) => {
    const userId = req.body.id
    let result = await User.deleteOne({
        _id: userId
    })
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

const postUploadsinglefile = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let results = await upLoadSingleFile(req.files.image)
    console.log(">> check result", results)


    return res.send("oke upload file")
}

module.exports = {
    getUsersApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadsinglefile
}