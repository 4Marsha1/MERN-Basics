import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/actions/users';
import styles from './Login.module.css';

const Login = () => {
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });

    useEffect(() => {
        if (userState.isAuthenticated) {
            navigate('/')
        }
    }, [userState.isAuthenticated])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.email || !user.password) {
            alert('Incomplete Fields!');
            return;
        }
        dispatch(loginUser(user.email, user.password));
        setUser({ email: '', password: '' })
    }
    return (
        <div className={styles['container']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input type="email" name="email" value={user.email} placeholder='Email' onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder='Password' onChange={handleChange} />
                <input className={styles['btn']} type="submit" value='Login' />
                <Link to='/register' className={styles['redirect']}>Not a member? Register Now</Link>
            </form>
        </div>

    )
}

export default Login