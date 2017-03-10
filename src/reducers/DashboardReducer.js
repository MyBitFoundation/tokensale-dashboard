import { Map } from 'immutable';

const initialState =  Map({
    history: [],
    rates: {
        crypto: {},
        fiat: {}
    },
    currency: '',
    sort: 'date'
});

export default function DashboardReducer(state = initialState, action) {
    switch(action.type) {
        case 'DASHBOARD_HISTORY':
            state = state.set('history', action.payload);
            return state;
        case 'DASHBOARD_RATES':
            state = state.set('rates', action.payload.rates);
            state = state.set('currency', action.payload.currency)
            return state;
        case 'DASHBOARD_CURRENCY':
            state = state.set('currency', action.payload);
            return state;
        case 'DASHBOARD_SORT':
            state = state.set('sort', action.payload);
            return state;
        default:
            return state;
    }
}
