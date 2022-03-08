import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import { createBlog, getBlogs, updateBlog, updateLike } from '../redux/actions/blogs';


const Home = (props) => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs)
    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])
    const [blog, setBlog] = useState({
        creator: '',
        title: '',
        desc: '',
        hashtags: '',
        likes: 0,
        selectedFile: ''
    })
    const [currentId, setCurrentId] = useState(null)
    const handleImg = (file) => {
        console.log('hit', file.base64);
        setBlog({ ...blog, selectedFile: file.base64 })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId === null) {
            dispatch(createBlog(blog));
        } else {
            dispatch(updateBlog(blog));
        }
    }
    const editBlog = (blog) => {
        setBlog({
            creator: blog.creator,
            title: blog.title,
            desc: blog.desc,
            hashtags: blog.hashtags,
            likes: blog.likeCount,
            selectedFile: blog.selectedFile,
        })
    }
    const handleLike = (id, currentLikes) => {
        console.log(id, currentLikes);
        // dispatch(updateLike(id, currentLikes))
    }
    return (
        <HomeScreen
            state={blog}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleLike={handleLike}
            handleImg={handleImg}
            currentId={currentId}
            setCurrentId={setCurrentId}
            editBlog={editBlog}
            blogs={blogs}
        />
    );
}

export default Home;
