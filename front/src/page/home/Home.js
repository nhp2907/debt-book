import React from 'react'
import Members from './component/Members/Members.jsx'
import MemberDetail from './component/MemberDetail/MemberDetail';
import {Route, Redirect, Switch} from 'react-router-dom'
import {useSelector} from "react-redux";
import Header from "../header/Header";

function Home() {
    const auth = useSelector(state => state.auth);

    require('./Home.css')
    if (!auth || !auth.id) {
        return (<Redirect to="/login"/>)
    }

    return (
        <div className="home">
            <Header/>
            <div className="home-content">
                <Members/>
                <Switch>
                    <Route path="/members/:id" component={MemberDetail}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </div>
        </div>
    );
}

export function Test() {
    return (
        <div className="test">
            <h2>test page</h2>
        </div>
    )
}

export default Home;