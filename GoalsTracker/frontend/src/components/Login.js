import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/actions/user';

const Login = () => {

    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (userState.isLoggedIn) {
    //         console.log(userState.loggedUser.token);
    //     }
    // }, [userState.isLoggedIn])

    const [user, setUser] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.email || !user.password) {
            alert('Please fill in the fields before submitting');
            return;
        }
        console.log(user);
        dispatch(loginUser(user.email, user.password));
        setUser({ email: '', password: '' })
    }
    return (
        <div className='App'>
            <div className='container'>
                <span className='title'>Login</span>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    <input
                        className='input'
                        type="text"
                        name="password"
                        value={user.password}
                        placeholder='Password'
                        onChange={handleChange}
                    />
                    <input
                        className='btn'
                        type="submit"
                        value='Login'
                    />
                </form>
                <Link className='redirect' to='/'>Not a member? Register Now</Link>
            </div>
        </div>
    )
}

export default Login