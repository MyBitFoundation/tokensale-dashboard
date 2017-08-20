import { Map } from 'immutable';

const initialState =  Map({
    modal: null,
    open: false,
    currency: '',
    loading: false,
    keys: {},
    error: false
});

export default function ModalsReducer(state = initialState, action) {
    switch(action.type) {
        case 'OPEN_STEP_1':
            state = state.set('modal', 'step1');
            state = state.set('open', true);
            state = state.set('currency', action.payload);
            return state;
        case 'OPEN_SUCCESSFULLY_WITHDRAW':
            state = state.set('modal', 'successfully_withdraw');
            state = state.set('open', true);
            return state;
        case 'MODAL_LOADING':
            state = state.set('loading', true);
            return state;
        case 'MODAL_GENERATION_FAIL':
            state = state.set('error', true);
            return state;
        case 'OPEN_STEP_2':
            state = state.set('modal', 'step2');
            state = state.set('loading', false);
            state = state.set('keys', action.payload);
            return state;
        case 'OPEN_PASSWORD_CHANGED':
            state = state.set('modal', 'passwordChanged');
            state = state.set('open', true);
            return state;
        case 'OPEN_TFA_CHANGED':
            state = state.set('modal', 'tfaChanged');
            state = state.set('open', true);
            return state;
        case 'CLOSE_MODAL':
            return initialState;
        default:
            return state;
    }
}
