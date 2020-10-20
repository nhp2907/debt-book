import React, {useState, useEffect, useRef} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import http from '../../../../service/Http';

function Members(props) {
    require('./Members.css');
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        // document.addEventListener('mousedown', event => {
        //     if (searchResultDiv.current && !searchResultDiv.current.contains(event.target)) {
        //
        //     }
        // })
        http.get('/users')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="members">
            <div className="members-container">
                <div className="top">
                    <h2>Your friends</h2>
                    {/*<SearchFriend/>*/}
                </div>
                <div className="members-list">
                    <div className="members-list-content">
                        <ul>
                            {friends.map(friend =>
                                <li key={friend.id}>
                                    <NavLink className="nav-link"
                                             to={`/members/${friend.id}`} key={friend.id}>
                                        {friend.name}
                                    </NavLink>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <span>bottom</span>
                </div>
                {
                    friends.length > 0 && (<Redirect to={`/members/${friends[1].id}`}/>)
                }
            </div>
        </div>
    );
}

export default Members;