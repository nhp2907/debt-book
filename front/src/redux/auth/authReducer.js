import * as AuthAction from './AuthAction'

const initialAuth = {
    isLoggedIn: true,
    user: {
        id: 1,
        name: 'Nguyen Hoang Phuc'
    }
};

const authReducer = (state = initialAuth, actions) => {
    switch (actions.type) {
        case AuthAction.SET_LOGGED_IN:
            return { ...state, isLoggedIn: actions.payload.isLoggedIn }
        case AuthAction.SET_USER:
            return { ...state, user: actions.payload.user }
        default:
            return state;
    }
}

export default authReducer;