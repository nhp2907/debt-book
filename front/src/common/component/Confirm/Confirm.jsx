import React, {useRef, useState} from "react";

function Confirm(props) {
    require('../../common.css');
    require('./Confirm.css');
    const refSelf = useRef(null);
    const handleClick = (isConfirm) => {
        props.confirm(isConfirm);
    }
    return (
        <div className="common-container" ref={refSelf}>
            <h4 id="message">{props.message}</h4>
            <div className="common-confirm-button">
                <button id={"positive"} onClick={() => handleClick(true)}>{props.positiveMessage ?? 'Yes'}</button>
                <button onClick={() => handleClick(false)}>{props.negativeMessage ?? 'No'}</button>
            </div>
        </div>
    )
}


export default Confirm;