import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import http from "./Http";
import {post}  from "./Http";
import {setCurrentUser} from "../redux/auth/AuthAction";

export const login = (loginRequest) => {
    return http.post('/users/auth/login', loginRequest);
}

export const auth = () => {
}

export const signup = (signupRequest) => {
    return http.post('/users/auth/signup', signupRequest);
}

export default auth;