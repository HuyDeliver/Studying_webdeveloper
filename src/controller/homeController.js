const connection = require('../config/database')
const { getAllUser, getOneUser, updateUser, deleteUser, insertUser } = require('../services/CRUD')
const getHomePage = async (reg, res) => {
    let results = await getAllUser()
    return res.render('home.ejs', { listUser: results })
}
const getABC = (reg, res) => {
    res.send('check ABC ')
}

const getHello = (reg, res) => {
    res.render('sample.ejs')
}

const PostCreateNewUser = async (reg, res) => {
    const { email, name, city } = reg.body
    await insertUser(email, name, city)
    res.redirect('/')

}

const GetCreatePage = (reg, res) => {
    res.render('createuser.ejs')
}

const GetUpdatePage = async (reg, res) => {
    const userId = reg.params.id
    let results = await getOneUser(userId)
    res.render('edituser.ejs', { getOneuser: results })
}

const PostUpdatePage = async (reg, res) => {
    const { userId, userName, userEmail, userCity } = reg.body
    console.log(reg.body)
    await updateUser(userId, userName, userEmail, userCity)
    res.redirect('/')
}

const GetDeletePage = async (reg, res) => {
    const userId = await reg.params.id
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