const express = require('express');
const { getRandomUser, getAllUser, saveAUser, updateAUser, updateBulkUser, deleteUser } = require('../controller/user.controller');
const router = express.Router()

router.get('/random', getRandomUser)

router.get('/all', getAllUser)

router.post('/save', saveAUser)

router.patch('/update', updateAUser)

router.patch('/bulk-update', updateBulkUser)

router.delete('/delete', deleteUser)


module.exports = router;