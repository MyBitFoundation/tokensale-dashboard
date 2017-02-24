import { Map } from 'immutable';

const initialState =  Map({
    history: [],
    rates: {
        crypto: {},
        fiat: {}
    }
})

export default function DashboardReducer(state = initialState, action) {
    switch(action.type) {
        case 'DASHBOARD_HISTORY':
            state = state.set('history', action.payload)
            return state;
        case 'DASHBOARD_RATES':
            state = state.set('rates', action.payload)
            return state;
        default:
            return state;
    }
}
