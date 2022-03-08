const express = require("express");
const { getGoals, createGoal, updateGoal, deleteGoal } = require("../controllers/goalsController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware")

// router.get('/', getGoals)
// router.post('/', createGoal)
router.route('/').get(protect, getGoals).post(protect, createGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router;