const asyncHandler = require('express-async-handler');
const Item = require('../models/itemModel');

// @Route           GET /api/items/
// @Desc            Get all items for display
// @Access          PUBLIC
const getAllItems = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(400);
        throw new Error('No Items Found')
    }
})

// @Route           POST /api/items/
// @Desc            Create new Item
// @Access          ONLY to ADMIN
const createItem = asyncHandler(async (req, res) => {
    if (req.user.id !== '622edcbb479e4a21ee89f948') {
        res.status(404);
        throw new Error('Unauthorized');
    }
    const { name, desc, price, state, city, image } = req.body;
    if (!name || !desc || !price || !state || !city || !image) {
        res.status(400);
        throw new Error('Incomplete Fields!');
    }
    const item = new Item({ name, desc, price, state, city, image });
    await item.save();
    if (item) {
        res.status(200).json(item)
    } else {
        res.status(400);
        throw new Error('Item Creation Failed!');
    }
})

// @Route           PUT /api/items/:id
// @Desc            Update an item
// @Access          ONLY to ADMIN
const updateItem = asyncHandler(async (req, res) => {
    if (req.user.id !== '622edcbb479e4a21ee89f948') {
        res.status(404);
        throw new Error('Unauthorized');
    }
    const { name, desc, price, state, city, image } = req.body;
    if (!name || !desc || !price || !state || !city || !image) {
        res.status(400);
        throw new Error('Incomplete Fields!');
    }
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
        res.status(404);
        throw new Error('Item not found');
    }
    const updatedItem = await Item.findByIdAndUpdate(id, {
        name, desc, price, state, city, image
    }, { new: true })
    if (updatedItem) {
        res.status(200).json(updatedItem)
    } else {
        res.status(400);
        throw new Error('Update Item Failed')
    }
})

// @Route           DELETE /api/items/:id
// @Desc            Delete an item
// @Access          ONLY to ADMIN
const deleteItem = asyncHandler(async (req, res) => {
    if (req.user.id !== '622edcbb479e4a21ee89f948') {
        res.status(404);
        throw new Error('Unauthorized');
    }
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
        res.status(404);
        throw new Error('Item not found');
    }
    const deletedItem = await Item.findByIdAndDelete(id);
    if (deleteItem) {
        res.status(200).json(deletedItem)
    } else {
        res.status(400);
        throw new Error('Delete Item Failed')
    }
})

module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
}