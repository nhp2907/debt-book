import React, {useState, useEffect} from 'react'
import Debt from './Debt/Debt.jsx';
import {useDispatch, useSelector} from "react-redux";
import ModalContainer from "../../../../../../common/component/ModalContainer/ModalContainer";
import Confirm from "../../../../../../common/component/Confirm/Confirm";
import http from "../../../../../../service/Http";
import {setDebts} from "../../../../../../redux/debts/DebtAction";

function DebtList(props) {
    require('./DebtList.css');
    const debts = useSelector(state => state.debts);
    const [isShowModal, setIsShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('DebtList useEffect')
    }, [debts])
    const clearAllDebt = () => {
        setIsShowModal(true);
    }
    return (
        <div className="debt-list">
            <div className="debt-list-header">
                <h3>Debt list</h3>
                <button onClick={clearAllDebt}>Delete all</button>
            </div>
            <div className="list">
                {debts.map(debt => (
                    <Debt debt={debt} key={debt.id} debtor={props.friend}/>
                ))}
            </div>
            {
                isShowModal &&
                <ModalContainer>
                    <Confirm message={'Clear all debts?'}
                             confirm={
                                 (isDelete) => {
                                     if (isDelete) {
                                         http.delete(`/debts/delete/users/${props.friend.username}`)
                                             .then(res => dispatch(setDebts([])))
                                             .catch(err => console.error(err));
                                     }
                                     // close modalContainer
                                     setIsShowModal(false);
                                 }
                             }
                    />

                </ModalContainer>

            }
        </div>
    )
}

export default DebtList;