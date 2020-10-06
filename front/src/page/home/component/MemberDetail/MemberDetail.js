import Axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch, useParams } from 'react-router-dom'
import AddDebt from './component/AddDebt/AddDebt'
import './MemberDetail.css'
import DebtList from './component/DebtList/DebtList'

function MemberDetail() {
    const [friend, setFriend] = useState({});
    const [debts, setDebts] = useState([]);
    const [totalDebt, setTotalDebt] = useState(0);
    const auth = useSelector(state => state.auth);
    const { path, url } = useRouteMatch();
    const params = useParams();
    useEffect(() => {
        console.log('Member detail useEffect')
        Axios.get(`http://localhost:8080/users/${params.id}`)
            .then(res => {
                setFriend(res.data);
            })
            .catch(err => console.error(err));  
    }, [params.id])

    useEffect(() => {
        if (friend.id) {
            Axios.get(`http://localhost:8080/users/${auth.user.id}/debts/${friend.id}`)
                .then(res => {
                    setDebts(res.data);
                    console.log('Member detail setDebts')
                })
                .catch(err => console.error(err));
        }
    }, [friend])

    useEffect(() => {
        const total = debts.reduce((total, current) => total += current.amount, 0);
        setTotalDebt(total);
    }, [debts])

    const addDebtCallBack = (debt) => {
        setDebts([debt, ...debts]);
        
    }

    return (
        <div className="member-detail">
            <div className="member-detail-header">
                <h3 id="friend-name">{friend.name}</h3>
                <div className="amount">
                    <span>total:</span>
                    <span id="value">{totalDebt}</span>
                    <span>vnđ</span>
                </div>
            </div>
            <AddDebt creditor={auth.user} friend={friend} addDebtCallBack={addDebtCallBack}/>
            <DebtList friend={friend} debts={debts} />
        </div>
    );

}

export default MemberDetail;