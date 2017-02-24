import { Map } from 'immutable';

const initialState =  Map({
    secret: '',
    url: ''
})

export default function TFAReducer(state = initialState, action) {
    switch(action.type) {
        case 'TFA_SECRET':
            state = state.set('secret', action.payload.secret);
            state = state.set('url', action.payload.url);
            return state;
        default:
            return state;
    }
}
