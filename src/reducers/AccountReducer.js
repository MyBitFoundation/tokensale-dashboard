import { Map } from 'immutable';

const initialState = Map({
    email: null,
    amountRaised: 0,
	contractAddress: '',
    amountRaisedEUR: 0,
    balance: 0,
    tokenPrice: 0,
    lastLoginDate: null,
    address: null,
    tfa: null,
	endTime: null,
    precision: 0
});

export default function AccountReducer(state = initialState, action) {
    switch(action.type) {
        case 'INIT_ACCOUNT':
            state = state.set('email', action.payload.email);
            state = state.set('amountRaised', action.payload.amountRaised);
            state = state.set('amountRaisedEUR', action.payload.amountRaisedEUR);
            state = state.set('balance', action.payload.balance);
            state = state.set('lastLoginDate', action.payload.lastLoginDate);
            state = state.set('address', action.payload.address);
            state = state.set('tfa', action.payload.tfa);
            state = state.set('tokenPrice', action.payload.tokenPrice);
            state = state.set('precision', action.payload.precision);
            state = state.set('contractAddress', action.payload.contractAddress);
            state = state.set('endTime', action.payload.endTime);
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
