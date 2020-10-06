import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, BrowserRouter as Router, Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import './Members.css'
import MemberDetail from '../MemberDetail/MemberDetail';

function Members(props) {
    const [friends, setFriends] = useState([]);
    const { path, url } = useRouteMatch();
    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then(res => setFriends(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="members">
            <h2>Your friends</h2>
            <ul>
                {
                    friends.map(friend =>
                        <Link to={`/members/${friend.id}`} key={friend.id}>
                            <li>
                                {friend.name}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    );

}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

export default Members;