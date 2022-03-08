const express = require("express");
const { getGoals, createGoal, updateGoal, deleteGoal } = require("../controllers/goalsController");
const router = express.Router();

// router.get('/', getGoals)
// router.post('/', createGoal)
router.route('/').get(getGoals).post(createGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router;