const express = require('express');
const { exercise_index, exercise_create, exercise_get, exercise_delete, exercise_update } = require('../controllers/exerciseController');

const router = express.Router();

router.get('/', exercise_index)
router.post('/add', exercise_create)
router.get('/:id', exercise_get)
router.delete('/:id', exercise_delete)
router.post('/update/:id', exercise_update)

module.exports = router;