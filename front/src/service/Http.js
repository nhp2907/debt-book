import {configure} from "@testing-library/react";
import Axios from "axios";

const baseUrl = 'http://localhost:8080/api';

export const authenticationHeader = () => {
    // TODO replace localStorage with
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return {
            Authentication: `Bearer ${user.accessToken}`
        }
    } else {
        return {}
    }
}

const http = Axios.create({
    baseURL: baseUrl,
})

http.interceptors.request.use(async req => {
    const user = await JSON.parse(localStorage.getItem('user'));
    if (user) {
        req.headers.Authentication = `Bearer ${user.accessToken}`;
    }
    return req;
})

export const post = (path, body) => {
    return http.post(`${path}`, body);
}


export default http;