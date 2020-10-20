import React, {useState,  useRef} from 'react'
import http from '../../../../../../service/Http';
import {useDispatch, useSelector} from "react-redux";
import {addDebt} from "../../../../../../redux/debts/DebtAction";

function AddDebt(props) {
    require('./AddDebt.css');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const amountInput = useRef(null);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function addNewDebt() {
        let debt;
        if (amount > 0) {
            debt = {
                creditorId: auth.id,
                debtorId: props.friend.id,
                amount: amount,
                description: description
            };
        } else if (amount < 0){
            debt = {
                debtorId: auth.id,
                creditorId: props.friend.id,
                amount: Math.abs(amount),
                description: description
            };
        } else {
            return;
        }
        http.post(`/debts/new`, debt)
            .then(res => {
                console.log('Added new debt!');
                dispatch(addDebt(res.data));
                setAmount('');
                setDescription('');
                amountInput.current.focus();
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="add-debt">
            <div className="form">
                <div className="form-control">
                    <label htmlFor="">Amount</label>
                    <input type="number" autoFocus
                           value={amount}
                           ref={amountInput}
                           onChange={event => setAmount(event.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Description</label>
                    <input type="text"
                           value={description}
                           onChange={event => setDescription(event.target.value)}/>
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