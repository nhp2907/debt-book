import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setAuth} from "../../redux/auth/AuthAction";
import * as authService from '../../service/AuthService'
import {useHistory} from 'react-router-dom'
import http from "../../service/Http";
import ModalContainer from "../../common/component/ModalContainer/ModalContainer";
import Alert from "../../common/component/Alert/Alert";
import ValidatedInput from "../../common/customUI/ValidatedInput/validatedInput";

function Signup(props) {
    require('./Signup.css');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowSuccessAlert, setIsShowSuccessAlert] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const signup = () => {
        authService.signup({name, username, password})
            .then(res => {
                setIsShowSuccessAlert(true);
            })
            .catch(err => {
                console.error(err.response);
            });
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="header">
                    <img src={require('../../assets/images/logo.png')} alt=""/>
                    <h4>Create an account</h4>
                </div>
                <div className="content">
                    {/*<div className="form-control">*/}
                    {/*    <label>Email</label>*/}
                    {/*    <input onChange={event => setName(event.target.value)} type="email"/>*/}
                    {/*</div>*/}
                    <ValidatedInput
                        label={'Name'} errorMessage={'* name is required'}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        validate={value => value}/>
                    <ValidatedInput
                        label={'Username'} errorMessage={'* username is invalid'}
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        validate={value => value && value.match("^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")}/>
                    <ValidatedInput
                        type={'password'}
                        label={'Password'} errorMessage={'* password is invalid'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        validate={value => value && value.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$")}
                    />
                    <div className="submit">
                        <div className="term">
                            <input type="checkbox"/>
                            <span id="terms" onClick={() => {

                            }}>Agree to our terms</span>
                        </div>
                        <button onClick={signup}>Sign up</button>
                    </div>
                </div>
            </div>
            {
                isShowSuccessAlert &&
                <ModalContainer>
                    <Alert message={'Sign up successfully!'} remove={() => history.push('/login')}/>
                </ModalContainer>
            }
        </div>
    );
}

export default Signup;