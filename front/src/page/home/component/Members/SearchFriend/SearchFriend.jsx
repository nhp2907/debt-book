import React, {useEffect, useRef, useState} from "react";
import http from "../../../../../service/Http";

function SearchFriend(props) {
    require('./SearchFriend.css');
    const [friends, setFriends] = useState([]);
    const [isDisplayResult, setIsDisplayResult] = useState(false);
    const searchDiv = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', event => {
            if (searchDiv.current && !searchDiv.current.contains(event.target)) {
                setIsDisplayResult(false);
            }
        })
    }, [])
    const handleOnChange = event => {
        http.get(`/users?name=${event.target.value}`)
            .then(res =>{
                setFriends(res.data)
                setIsDisplayResult(true);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="search-friend"  ref={searchDiv}>
            <div className="search-box">
                <input onChange={handleOnChange} type="text"/>
            </div>
            {isDisplayResult &&
            <div className="search-result">
                <div className="result">
                    <ul>{friends.map(friend =>
                        <li key={friend.id}>{friend.name}</li>
                    )}
                    </ul>
                </div>
            </div>
            }
        </div>
    );

}

export default SearchFriend;