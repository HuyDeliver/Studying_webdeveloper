const connection = require('../config/database')
const { getAllUser, getOneUser, updateUser, deleteUser, insertUser } = require('../services/CRUD')
const getHomePage = async (req, res) => {
    let results = await getAllUser()
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
    await insertUser(email, name, city)
    res.redirect('/')

}

const GetCreatePage = (req, res) => {
    res.render('createuser.ejs')
}

const GetUpdatePage = async (req, res) => {
    const userId = req.params.id
    let results = await getOneUser(userId)
    res.render('edituser.ejs', { getOneuser: results })
}

const PostUpdatePage = async (req, res) => {
    const { userId, userName, userEmail, userCity } = req.body
    console.log(req.body)
    await updateUser(userId, userName, userEmail, userCity)
    res.redirect('/')
}

const GetDeletePage = async (req, res) => {
    const userId = await req.params.id
    await deleteUser(userId)
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