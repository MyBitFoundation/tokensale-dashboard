import { Map } from 'immutable';

const initialState = Map({
    email: null,
    balance: 0,
    lastLoginDate: null,
    address: null,
    tfa: null
});

export default function AccountReducer(state = initialState, action) {
    switch(action.type) {
        case 'INIT_ACCOUNT':
            state = state.set('email', action.payload.email);
            state = state.set('balance', action.payload.balance);
            state = state.set('lastLoginDate', action.payload.lastLoginDate);
            state = state.set('address', action.payload.address);
            state = state.set('tfa', action.payload.tfa)
            return state;
        case 'LOGOUT':
            state = initialState;
            return state;
        case 'TFA_ENABLED':
            state = state.set('tfa', action.payload.tfa)
            return state;
        case 'TFA_DISABLED':
            state = state.set('tfa', action.payload.tfa)
            return state;
        default:
            return state;
    }
}
