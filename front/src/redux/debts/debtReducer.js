import * as DebAction from "./DebtAction";

const initValue = [];


const debtReducer = (state = initValue, actions) => {
    switch (actions.type) {
        case DebAction.SET_DEBTS:
            return actions.payload.debts;
        case DebAction.ADD_DEBT:
            return [actions.payload.debt, ...state];
        case DebAction.DELETE_DEBT:
            return state.filter(debt => debt !== actions.payload.debt);
        default:
            return state;
    }
}

export  default  debtReducer;