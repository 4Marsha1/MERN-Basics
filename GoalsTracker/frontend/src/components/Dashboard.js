import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as UserSVG } from '../icons/user.svg';
import { ReactComponent as MailSVG } from '../icons/mail.svg';


const Dashboard = () => {
    const { state } = useLocation();
    const { token } = state;


    return (
        <div className='dashboard'>
            <div className='details'>
                <div className='detail'>
                    <UserSVG className='svg' />
                    Name
                </div>
                <div className='detail'>
                    <MailSVG className='svg' />
                    Email
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