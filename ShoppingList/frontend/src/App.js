import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<Home />}
                    key='route-home-screen'
                />
                <Route
                    path='/login'
                    exact
                    element={<Login />}
                    key='route-login-screen'
                />
                <Route
                    path='/register'
                    exact
                    element={<Register />}
                    key='route-register-screen'
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
