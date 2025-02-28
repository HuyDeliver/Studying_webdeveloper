const connection = require('../config/database')
const { getAllUser, getOneUser, updateUser, deleteUser, insertUser } = require('../services/CRUD')
const User = require('../models/user')
const getHomePage = async (req, res) => {
    let results = await User.find({})
    return res.render('home.ejs', { listUser: results })
}
const getABC = (req, res) => {
    res.send('check ABC ')
}

const getHello = (req, res) => {
    res.render('sample.ejs')
}

const PostCreateNewUser = async (req, res) => {
    const { email, name, city } = req.body
    await User.create({
        email, name, city
    })
    res.redirect('/')

}

const GetCreatePage = (req, res) => {
    res.render('createuser.ejs')
}

const GetUpdatePage = async (req, res) => {
    const userId = req.params.id
    let results = await User.findById(userId).exec()
    res.render('edituser.ejs', { getOneuser: results })
}

const PostUpdatePage = async (req, res) => {
    const { userId, userName, userEmail, userCity } = req.body
    await User.updateOne({ _id: userId }, { name: userName, email: userEmail, city: userCity })
    res.redirect('/')
}

const GetDeletePage = async (req, res) => {
    const userId = req.params.id
    await User.findByIdAndDelete(userId)
    res.redirect('/')
}
module.exports = {
    getHomePage,
    getABC,
    getHello,
    PostCreateNewUser,
    GetCreatePage,
    GetUpdatePage,
    PostUpdatePage,
    GetDeletePage
}