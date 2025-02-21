const express = require('express')
const router = express.Router()
const { getHomePage, getABC, getHello, PostCreateNewUser, GetCreatePage, GetUpdatePage, PostUpdatePage, GetDeletePage } = require('../controller/homeController')
router.get('/', getHomePage)

router.get('/abc', getABC)

router.get('/hello', getHello)

router.get('/create', GetCreatePage)

router.get('/update/:id', GetUpdatePage)

router.post('/update-user', PostUpdatePage)

router.get('/delete/:id', GetDeletePage)

router.post('/createnew', PostCreateNewUser)

module.exports = router