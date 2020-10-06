export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_USER = 'SET_USER';

export const setUser = (user) => {
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


