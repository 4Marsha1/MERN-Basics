const express = require("express");
const { getAllItems, createItem, deleteItem, updateItem } = require("../controllers/itemController");
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getAllItems).post(protect, createItem)
router.route('/:id').put(protect, updateItem).delete(protect, deleteItem);

module.exports = router;