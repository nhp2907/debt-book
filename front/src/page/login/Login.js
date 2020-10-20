import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom';
import {setAuth} from '../../redux/auth/AuthAction';
import Axios from 'axios';

function Login() {
    require('./Login.css');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        console.log("login useEffect")
    })

    const login = () => {
        // AuthService.login({username, password})
        Axios.post('http://localhost:8080/api/users/auth/login', {username, password})
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data));
                dispatch(setAuth(res.data));
            })
            .catch(err => console.error('login err: ', err));

    };

    if (auth.id) {
        return (
            <Redirect to="/"></Redirect>
        )
    }

    return (
        <div className="login">
            <div className="container">
                <div className="header">
                    <img src={require('../../assets/images/logo.png')} alt=""/>
                    <h4>Log in to DebtBook</h4>
                </div>
                <div className="content">
                    <div className="form-control">
                        <label htmlFor="">User name</label>
                        <input type="text" autoFocus onChange={event => setUsername(event.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <button onClick={login}>Log in</button>
                </div>
                <div className="footer">
                    <div className="content">
                        <span>New to Debtbook?</span>
                        <span id="link" onClick={() => history.push('/signup')}>Create an account</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;