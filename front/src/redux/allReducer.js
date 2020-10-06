import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'

const allReducer = combineReducers({
    auth: authReducer
})

export default allReducer;