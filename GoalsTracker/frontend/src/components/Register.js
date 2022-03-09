import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../redux/actions/user';

const Register = () => {

    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userState.isRegistered) {
            navigate('/dashboard', { state: { token: userState.user.token } })
        }
    }, [userState.isRegistered])

    const [user, setUser] = useState({ name: '', email: '', password1: '', password2: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.password1 || !user.password2) {
            alert('Please fill the fields before submitting');
            return;
        }
        if (user.password1 !== user.password2) {
            alert('Passwords dont match');
            return;
        }
        console.log(user);
        dispatch(registerUser(user.name, user.email, user.password1, user.password2));
        setUser({ name: '', email: '', password1: '', password2: '' });
    }

    return (
        <div className='App'>
            <div className='container'>
                <span className='title'>Register</span>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    <input
                        className='input'
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    <input
                        className='input'
                        type="password"
                        name="password1"
                        value={user.password1}
                        placeholder='Password'
                        onChange={handleChange}
                    />
                    <input
                        className='input'
                        type="password"
                        name="password2"
                        value={user.password2}
                        placeholder='Confirm Password'
                        onChange={handleChange}
                    />
                    <input
                        className='btn'
                        type="submit"
                        value='Register'
                    />
                </form>
                <Link className='redirect' to='/login'>Already a member? Login</Link>
            </div>
        </div>
    )
}

export default Register