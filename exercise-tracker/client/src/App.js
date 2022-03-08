import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Exercises from './Components/Exercises';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<>
                        <Navbar />
                        <Exercises />
                    </>}
                    key='route-exercises'
                />
                <Route
                    exact
                    path='/edit/:id'
                    element={<>
                        <Navbar />
                        <EditExercise />
                    </>}
                    key='route-exercises'
                />
                <Route
                    exact
                    path='/create'
                    element={<>
                        <Navbar />
                        <CreateExercise />
                    </>}
                    key='route-exercises'
                />
                <Route
                    exact
                    path='/user'
                    element={<>
                        <Navbar />
                        <CreateUser />
                    </>}
                    key='route-exercises'
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
