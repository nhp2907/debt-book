import * as AuthAction from './AuthAction'

const initialAuth = {
    accessToken: null,
    email: null,
    id: null,
    roles: [],
    tokenType: null,
    username: null
};

const authReducer = (state = initialAuth, actions) => {
    switch (actions.type) {
        case AuthAction.SET_LOGGED_IN:
            return { ...state, isLoggedIn: actions.payload.isLoggedIn }
        case AuthAction.SET_USER:
            return { ...state, user: actions.payload.user }
        case AuthAction.SET_AUTH:
            return actions.payload.auth;
        default:
            return state;
    }
}


export default authReducer;