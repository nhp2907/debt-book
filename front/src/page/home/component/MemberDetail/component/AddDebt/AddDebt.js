import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import './AddDebt.css'

function AddDebt(props) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [amountInput, setAmountInput] = useState({});
    function addNewDebt() {
        let debt = {
            creditorId: props.creditor.id,
            debtorId: props.friend.id,
            amount: amount,
            description: description
        };
        Axios.post(`http://localhost:8080/users/${props.friend.id}/debts/new`, debt)
            .then(res => {
                console.log('Added new debt!');
                props.addDebtCallBack(res.data);
                setAmount('');
                setDescription('');
                amountInput.focus();
            })
            .catch(err => console.error(err));
    }

    function handleOnChange(event) {
        setAmount(event.target.value);
    }

    return (
        <div className="add-debt">
            <div className="form">
                <div className="form-control">
                    <label htmlFor="">Amount</label>
                    <input type="number" autoFocus
                        value={amount}
                        ref={input => setAmountInput(input)}
                        onChange={handleOnChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="">Description</label>
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                </div>
            </div>
            <div className="submit">
                <button onClick={addNewDebt}>Add</button>
            </div>
            <div className="clear-fix"></div>
        </div>
    );
}

export default AddDebt;