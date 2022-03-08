import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './redux/store';
import Home from './containers/Home';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={<Home />}
                        key='route-home-screen'
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
