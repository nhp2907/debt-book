export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_USER = 'SET_USER';
export const SET_AUTH = 'SET_AUTH';

export const setCurrentUser = (user) => {
    return {
        type: SET_USER,
        payload: {
            user
        }
    }
}

export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: SET_LOGGED_IN,
        payload: {
            isLoggedIn
        }
    }
}

export const setAuth = (auth) => {
    return {
        type: SET_AUTH,
        payload: {
            auth
        }
    }
}


