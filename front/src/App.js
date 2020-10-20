import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './page/home/Home';
import Login from './page/login/Login'
import Signup from "./page/signup/Signup";
import {useDispatch} from "react-redux";
import {setAuth} from "./redux/auth/AuthAction";

export default function App() {
    require('./App.css')
    // const auth = useSelector(state => state.auth);
    const auth = JSON.parse(localStorage.getItem('user')) ?? {id: null};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuth(auth));
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/members" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </div>
        </Router>
    );
}

