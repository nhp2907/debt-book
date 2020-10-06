import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { setIsLoggedIn } from '../../redux/auth/AuthAction';
import './Login.css'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const auth = useSelector(state => state.auth)
    
    const dispatch = useDispatch();

    const login = () => {
        // Axios.post('http://localhost:8080/users/auth', {
        //     userName: userName,
        //     password: password
        // })
        //     .then(res => setUser({
        //         id: 1,
        //         name: 'Nguyen Hoang Phuc'
        //     }))
        //     .catch(err => console.error(err));
        dispatch(setIsLoggedIn(true))
    };

    if (auth.isLoggedIn) {
        return (
            <Redirect to="/" ></Redirect>
        )
    }

    return (
        <div className="login">
            <div className="form-control">
                <label htmlFor="">User name</label>
                <input type="text" onChange={event => setUserName(event.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" onChange={event => setPassword(event.target.value)} />
            </div>
            <button onClick={login}>Log in</button>
        </div>
    );
}

export default Login;