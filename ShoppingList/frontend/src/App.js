import './App.css'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Provider store={store} >
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
        </Provider>
    );
}

export default App;
