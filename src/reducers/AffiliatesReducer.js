import { Map } from 'immutable';

const initialState = Map({
    referrer: [],
    sort: 'email'
});

export default function AffiliatesReducer(state = initialState,action) {
    switch (action.type) {
        case 'AFFILIATES_REFERRALS':
            state = state.set('referrer',action.payload)
            return state;
        default:
            return state;
    }
}