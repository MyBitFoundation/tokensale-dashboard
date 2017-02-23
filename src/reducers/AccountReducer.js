
const initialState = {
    email: null,
    balance: 0,
    lastLoginDate: null
}

export default function ModalsReducer(state = initialState, action) {
    switch(action.type) {
        case 'INIT_ACCOUNT':
            return {
                email: action.payload.email,
                balance: action.payload.balance,
                lastLoginDate: action.payload.lastLoginDate
            };
        case 'LOGOUT':
            return initialState;
        default:
            return initialState;
    }
}
