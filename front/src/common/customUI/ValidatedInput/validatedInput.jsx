import React, {useEffect, useState} from 'react'

export default function ValidatedInput(props) {
    require('./ValidatedInput.css');
    const [hasError, setHasError] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);
    useEffect(() => {
        console.log('useEffect')
        const timer = setTimeout(() => {
            if (isFirstTime) {
                setIsFirstTime(false);
            } else {
                setHasError(!props.validate(props.value));
            }
        }, 600);
        return () => clearTimeout(timer);
    }, [props])

    return (
        <div className="custom-ui-validate-input">
            {
                props.label && <label htmlFor="">{props.label}</label>
            }
            <input type={props.type ?? 'text'}
                   value={props.value}
                   placeholder={props.placeholder ?? ''}
                   onChange={event => props.onChange(event)}/>
            {
                <span style={hasError ? null : {visibility: 'hidden'}}>{props.errorMessage}</span>
            }
        </div>
    )
}