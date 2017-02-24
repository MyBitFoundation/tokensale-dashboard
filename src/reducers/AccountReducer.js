import { Map } from 'immutable';

const initialState = Map({
    email: null,
    balance: 0,
    lastLoginDate: null
});

export default function ModalsReducer(state = initialState, action) {
    switch(action.type) {
        case 'INIT_ACCOUNT':
        console.log(action.payload)
            state = state.set('email', action.payload.email);
            state = state.set('balance', action.payload.balance);
            state = state.set('lastLoginDate', action.payload.lastLoginDate);
            return state;
        case 'LOGOUT':
        console.log(action.payload)
            state = initialState;
            return state;
        default:
        console.log(action.payload)
            //state = initialState;
            return state;
    }
}
