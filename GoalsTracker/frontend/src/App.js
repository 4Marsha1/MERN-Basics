import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        exact
                        element={<Register />}
                        key='route-register-screen'
                    />
                    <Route
                        path='/login'
                        exact
                        element={<Login />}
                        key='route-login-screen'
                    />
                    <Route
                        path='/dashboard'
                        exact
                        element={<Dashboard />}
                        key='route-dashboard-screen'
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
