import React from "react";
import '../../common.css'

export default function Alert(props){
    require('./Alert.css')
    return (
        <div className="common-container">
            <h4 id="message">{props.message}</h4>
            <div className="alert-button">
                <button id={"positive"} onClick={() => props.remove()}>{props.buttonTitle ?? 'Ok'}</button>
            </div>
        </div>
    )
}