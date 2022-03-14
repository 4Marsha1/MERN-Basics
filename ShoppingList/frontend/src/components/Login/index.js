import { Link } from 'react-router-dom'
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles['container']}>
            <form className={styles['form']}>
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password1" placeholder='Password' />
                <input className={styles['btn']} type="submit" value='Login' />
                <Link to='/register' className={styles['redirect']}>Not a member? Register Now</Link>
            </form>
        </div>

    )
}

export default Login