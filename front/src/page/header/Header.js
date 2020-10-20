import React from 'react'
import {useDispatch} from "react-redux";
import {setAuth} from "../../redux/auth/AuthAction";

function Header() {
    require('./Header.css');
    const dispatch = useDispatch();
    const logOut = () => {
        localStorage.clear(); // just clear all
        dispatch(setAuth({id:null}));
        // history.push('/login');
    }
    return (
        <div className="app-header">
            <div className="container">
                <div className="left-side">
                    <img src={require('../../assets/images/logo.png')} alt=""/>
                </div>
                <div className="center">
                    <h3>Quán cơm A Phủ</h3>
                </div>
                <div className="right-side">
                    <div className="account">
                        <img src={require('../../assets/images/user-alt-512.webp')} alt=""/>
                        <span id="account-label" onClick={logOut}>Log out</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;