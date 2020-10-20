import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addDebt, DELETE_DEBT, deleteDebt} from "../../../../../../../redux/debts/DebtAction";
import http from "../../../../../../../service/Http";

function Debt(props) {
    require('./Debt.css')
    const [isOptionEnable, setIsOptionEnable] = useState(false);
    const optionContentRef = useRef(null);
    const optionButton = useRef(null);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const localDeleteDebt = () => {
        http.delete(`/debts/delete/${props.debt.id}`)
            .then(res => {
                dispatch(deleteDebt(props.debt));
            }).catch(err => console.error());
    }

    useEffect(() => {
        console.log(props.debt, auth.id)
        document.addEventListener('mouseup', event => {
            if (optionContentRef.current
                && !optionContentRef.current.contains(event.target)
                && !optionButton.current.contains(event.target)) {
                setIsOptionEnable(false);
            }
        })
    }, [optionContentRef])
    const getFormatDebtAmount = amount => {
        const temp = props.debt.creditor.id === auth.id ? props.debt.amount : -props.debt.amount;
        return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <div className="debt" style={props.debt.creditor.id !== auth.id ? {backgroundColor: "#fde6e6"} : null}>
            <div className="info">
                <h4>{getFormatDebtAmount(props.debt.amount)}</h4>
                <span>{props.debt.insertDate}</span>
                <p>{props.debt.description}</p>
            </div>
            <div className="option-container">
                <div className="round-button">
                    <button ref={optionButton} onClick={() => {
                        setIsOptionEnable(!isOptionEnable)
                    }}>...
                    </button>
                    {isOptionEnable && (
                        <div className="option-content" ref={optionContentRef}>
                            <span onClick={localDeleteDebt}>Delete</span>
                            <span>Option 2</span>
                            <span>Long Long long option 3</span>
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Debt;