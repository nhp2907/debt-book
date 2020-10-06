import { createContext } from "react";


export const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    tokens: '',
    setUser: () => { },
    setLoggedIn: () => {  }
});
export const getUser = () => {
    return {
        id: 1,
        name: 'Nguyen Hoang Phuc',
        userName: 'admin',
        password: 'secrete'
    }
}

class Auth {
    user = {
        id: 1,
        name: 'Nguyen Hoang Phuc',
        userName: 'admin',
        password: 'secrete'
    }
    isLogin = () => {
        return true;
    }


}

export default Auth;