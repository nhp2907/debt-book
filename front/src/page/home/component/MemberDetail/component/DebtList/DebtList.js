import React, { useState, useEffect } from 'react'
import './DebtList.css'
import Debt from './Debt/Debt.jsx';
import Axios from 'axios';
import { useSelector } from 'react-redux';

function DebtList(props) {
    const auth = useSelector(state => state.auth);
    useEffect(() => {

        console.log('deblist useEffect')
    })
    return (
        <div className="debt-list">
            <h3>Debt list</h3>
            <div className="list">
                {props.debts.map(debt => (
                    <Debt debt={debt} key={debt.id} />
                ))}
            </div>
        </div>
    )
}

export default DebtList;