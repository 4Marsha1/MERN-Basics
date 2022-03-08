const mongoose = require('mongoose');
const Blog = require('../models/BlogModel')


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = new Blog(blog)
    try {
        await newBlog.save()
        res.status(201).json(newBlog)
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const updateBlog = async (req, res) => {
    const { id: _id } = req.params
    const blog = req.body
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Post Found')
    const updatedBlog = await Blog.findByIdAndUpdate(_id, blog, { new: true })
    res.json(updatedBlog)
}

module.exports = {
    getBlogs,
    createBlog,
    updateBlog
}