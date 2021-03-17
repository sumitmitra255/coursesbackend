const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')


router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account', authenticateUser, usersController.account)
router.put('/api/users/:id', authenticateUser, usersController.update)
module.exports = router
//
