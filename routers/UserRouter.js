const express = require('express')
const router = express.Router()

const {
    getAllUsers,getSingleUser,createUser,editUser,delUser
} = require('../controllers/UserController')

router.route('/')
    .get(getAllUsers)
    .post(createUser)
router.route('/:id')
    .get(getSingleUser)
    .patch(editUser)
    .delete(delUser)

module.exports = router;