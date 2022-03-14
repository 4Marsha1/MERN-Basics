import { Link } from 'react-router-dom'
import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles['container']}>
            <form className={styles['form']}>
                <input type="text" name="name" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password1" placeholder='Password' />
                <input type="password" name="password2" placeholder='Confirm Password' />
                <input className={styles['btn']} type="submit" value='Register' />
                <Link className={styles['redirect']} to='/login'>Already a member? Login</Link>
            </form>
        </div>

    )
}

export default Register