const express = require('express');
const { user_index, user_create } = require('../controllers/userController');

const router = express.Router();

router.get('/', user_index)
router.post('/add', user_create)

module.exports = router;