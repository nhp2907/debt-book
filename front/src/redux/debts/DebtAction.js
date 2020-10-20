export const ADD_DEBT = 'ADD_DEBT';
export const DELETE_DEBT = 'DELETE_DEBT';
export const SET_DEBTS = 'SET_DEBTS';


export const setDebts = (debts) => {
    return {
        type: SET_DEBTS,
        payload: {
            debts
        }
    }
}

export const addDebt = (debt) => {
    return {
        type: ADD_DEBT,
        payload: {
            debt
        }
    }
}

export const deleteDebt = (debt) => {
    return {
        type: DELETE_DEBT,
        payload: {
            debt
        }
    }
}