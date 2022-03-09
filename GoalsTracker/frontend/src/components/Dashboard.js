import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as UserSVG } from '../icons/user.svg';
import { ReactComponent as MailSVG } from '../icons/mail.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/user';


const Dashboard = () => {
    const { state } = useLocation();
    const { token } = state;

    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [user, setUser] = useState({ name: '', email: '' });
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        dispatch(loadUser(token))
        if (userState.isLoaded) {
            console.log(userState.loadedUser);
            setUser({ name: userState.loadedUser.name, email: userState.loadedUser.email })
        }
    }, [])

    return (
        <div className='dashboard'>
            <div className='details'>
                <div className='detail'>
                    <UserSVG className='svg' />
                    {user.name}
                </div>
                <div className='detail'>
                    <MailSVG className='svg' />
                    {user.email}
                </div>
            </div>

            <div className='goals-section'>
                <div className='goals'>
                    <div className='goal'>
                        <span className='text'>GOAL NAME & DETAIL</span>
                        <button className='edit-btn'>Edit</button>
                        <button className='del-btn'>Delete</button>
                    </div>

                    {/* delete  */}
                    <div className='goal'>
                        <span className='text'>GOAL NAME & DETAIL</span>
                        <button className='edit-btn'>Edit</button>
                        <button className='del-btn'>Delete</button>
                    </div>
                </div>
                <div className='new-goal'>
                    <form className='form'>
                        <input className='input' type="text" placeholder='Type your goal' />
                        <input className='btn' type="submit" value='Create new goal' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dashboard