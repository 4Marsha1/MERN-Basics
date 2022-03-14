import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/users';
import styles from './Register.module.css';

const Register = () => {

    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userState.isAuthenticated) {
            navigate('/')
        }
    }, [userState.isAuthenticated])

    const [user, setUser] = useState({
        name: '', email: '', password1: '', password2: ''
    })
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!user.name || !user.email || !user.password1 || !user.password2) {
            alert('Incomplete Fields!');
            return;
        }
        else if (user.password1 !== user.password2) {
            alert('Passwords Dont Match');
            return;
        }
        dispatch(registerUser(user.name, user.email, user.password1, user.password2));
        setUser({ name: '', email: '', password1: '', password2: '' })
    }
    return (
        <div className={styles['container']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' value={user.name} onChange={handleChange} />
                <input type="email" name="email" placeholder='Email' value={user.email} onChange={handleChange} />
                <input type="password" name="password1" placeholder='Password' value={user.password1} onChange={handleChange} />
                <input type="password" name="password2" placeholder='Confirm Password' value={user.password2} onChange={handleChange} />
                <input className={styles['btn']} type="submit" value='Register' />
                <Link className={styles['redirect']} to='/login'>Already a member? Login</Link>
            </form>
        </div>

    )
}

export default Register