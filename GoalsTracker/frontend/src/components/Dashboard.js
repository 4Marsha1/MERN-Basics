import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UserSVG } from '../icons/user.svg';
import { ReactComponent as MailSVG } from '../icons/mail.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/user';
import { createGoal, deleteGoal, loadGoals, updateGoal } from '../redux/actions/goals';

const Dashboard = () => {
    const navigate = useNavigate();
    const userState = useSelector(state => state.userReducer);
    const goalState = useSelector(state => state.goalReducer)
    const dispatch = useDispatch();

    const loadDetails = () => {
        if (!userState.token) {
            navigate('/')
        }
        dispatch(loadUser(userState.token))
        dispatch(loadGoals(userState.token))
    }

    useEffect(() => {
        loadDetails();
    }, [])

    const [text, setText] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [currentText, setCurrentText] = useState('');

    const handleEdit = (id) => {
        setIsEdit(true);
        if (isEdit) {
            setCurrentId(id);
            const currentGoal = goalState.goals.filter(goal => goal._id === id);
            setCurrentText(currentGoal[0].text);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit && currentId) {
            dispatch(updateGoal(currentId, currentText, userState.token, loadDetails));
            setCurrentText('')
        } else {
            dispatch(createGoal(text, userState.token, loadDetails));
            setText('')
        }
    }
    const handleDelete = (id) => {
        dispatch(deleteGoal(id, userState.token, loadDetails));
    }

    return (
        <div className='dashboard'>
            <div className='details'>
                <div className='detail'>
                    <UserSVG className='svg' />
                    {userState.loadedUser ? userState.loadedUser.name : ''}
                </div>
                <div className='detail'>
                    <MailSVG className='svg' />
                    {userState.loadedUser ? userState.loadedUser.email : ''}
                </div>
            </div>
            <div className='goals-section'>
                <div className='goals'>
                    {
                        goalState.goals ?
                            goalState.goals.map((goal, idx) => {
                                return (
                                    <div className='goal' key={goal._id}>
                                        <span className='text'>{goal.text}</span>
                                        <button className='edit-btn' onClick={() => handleEdit(goal._id)}>Edit</button>
                                        <button className='del-btn' onClick={() => handleDelete(goal._id)}>Delete</button>
                                    </div>
                                )
                            }) : ''
                    }
                </div>
                <div className='new-goal'>
                    <form className='form' onSubmit={handleSubmit}>
                        {isEdit ?
                            <>
                                <button className='close-update' onClick={() => setIsEdit(false)}>&times;</button>
                                <input
                                    className='input'
                                    type="text"
                                    name='currentText'
                                    value={currentText}
                                    onChange={(e) => setCurrentText(e.target.value)}
                                    placeholder='Type your goal'
                                />
                                <input className='btn' type="submit" value='Update Goal' />
                            </> :
                            <>
                                <input
                                    className='input'
                                    type="text"
                                    name='text'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder='Type your goal'
                                />
                                <input className='btn' type="submit" value='Create new goal' />
                            </>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dashboard