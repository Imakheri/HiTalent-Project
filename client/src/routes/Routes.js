import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
// import { Private } from './Private';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
// import Home from '../Pages/Home';


export const Rout = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    },[dispatch, checking, isLoggedIn]);

    if(checking) {
        return <h3>Cargando...</h3>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={
                    <Route 
                    element = {(props) =>
                    isLoggedIn ? <Home /> : <Navigate to='/' />
                    }
                />
                }
                />
                {/* <ProtectedRoute isLoggedIn={isLoggedIn} path='/home' element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

