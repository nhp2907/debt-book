import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import AddDebt from './component/AddDebt/AddDebt'
import DebtList from './component/DebtList/DebtList.jsx'
import http from '../../../../service/Http'
import {useDispatch, useSelector} from "react-redux";
import {setDebts} from "../../../../redux/debts/DebtAction";
import UserService from "../../../../service/UserService";

function MemberDetail() {
    require('./MemberDetail.css');
    const [friend, setFriend] = useState({});
    const [totalDebt, setTotalDebt] = useState(0);
    const debts = useSelector(state => state.debts);
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth);
    const auth = JSON.parse(localStorage.getItem('user')) ?? {id: null};
    const params = useParams();
    useEffect(() => {
        console.log('Member detail useEffect')

        http.get(`/users/${params.id}`)
            .then(res => {
                setFriend(res.data);
            })
            .catch(err => console.error(err));
    }, [params.id])

    useEffect(() => {
        if (friend && friend.id) {
            http.get(`/debts/users/${friend.id}`)
                .then(res => {
                    dispatch(setDebts(res.data));
                })
                .catch(err => console.error('get members err: ', err));
        }
    }, [friend])

    useEffect(() => {
        const total = debts.reduce((total, debt) => total += debt.creditor.id === auth.id ? debt.amount : -debt.amount, 0);
        setTotalDebt(total);
    }, [debts])

    return (
        <div className="member-detail">
            <div className="member-detail-header">
                <h3 id="friend-name">{friend.name}</h3>
                <div className="amount">
                    <span>total:</span>
                    <span id="value">{totalDebt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    <span>vnđ</span>
                </div>
            </div>
            <AddDebt friend={friend}/>
            <DebtList friend={friend}/>
        </div>
    );

}

export default MemberDetail;