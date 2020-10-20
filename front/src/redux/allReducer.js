import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import debtReducer from "./debts/debtReducer";

const allReducer = combineReducers({
    auth: authReducer,
    debts: debtReducer
})

export default allReducer;