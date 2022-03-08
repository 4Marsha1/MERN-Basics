const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @route       GET /apis/goals
// @desc        Get goals
// @access      Private 
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @route       Post /apis/goals
// @desc        Create new goal
// @access      Private 
const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please fill the fields!');
    }
    const goal = new Goal({ text: req.body.text });
    await goal.save();
    res.status(201).json(goal)
})

// @route       PUT apis/goals/:id
// @desc        Update goal with id
// @access      Private 
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        return res.status(400).json({ msg: 'Goal not found' })
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGoal)
})

// @route       DELETE apis/goals/:id
// @desc        delete goal with id
// @access      Public 
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        return res.status(400).json({ msg: 'Goal Not found' })
    }
    await goal.remove();
    // await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}