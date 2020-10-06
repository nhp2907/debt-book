import React, { useState } from 'react'
import './Debt.css'
function Debt(props) {
    const [debt, setDebt] = useState({});
    return (
        <div className="debt">
            <h4>{props.debt.amount}</h4>
            <span>{props.debt.insertDate}</span>
            <p>{props.debt.description}</p>
        </div>
    )
}

export default Debt;