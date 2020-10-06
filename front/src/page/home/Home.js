import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Members from './component/Members/Members'
import DebtDetail from './component/DebtDetail/DebtDetail'
import MemberDetail from './component/MemberDetail/MemberDetail';
import { BrowserRouter as Router, Redirect, Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Home.css'

function Home() {
    const auth = useSelector(state => state.auth);
    const [members, setFriends] = useState([]);
    const { path, url } = useRouteMatch();
    useEffect(() => {
        console.log('ccc');
        axios.get('http://localhost:8080/users')
            .then(res => setFriends(res.data))
            .catch(err => console.error(err));
    }, []);


    if (!auth.isLoggedIn) {
        return (<Redirect to="/login" ></Redirect>)
    }

    return (
        <div className="home">
            <Members />
            <Switch>
                <Route path="/members/:id" component={MemberDetail} />
            </Switch>
            <DebtDetail />
        </div>
    );
}

export default Home;