const express = require('express')
const { getBlogs, createBlog, updateBlog } = require('../Controllers/blogs')
const router = express.Router();


router.get('/', getBlogs)
router.post('/', createBlog)
router.patch('/:id', updateBlog)

module.exports = router;
