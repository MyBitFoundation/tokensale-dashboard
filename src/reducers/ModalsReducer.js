
const initialState = {
    modal: null,
    open: false
}

export default function ModalsReducer(state = initialState, action) {
    switch(action.type) {
        case 'OPEN_MODAL':
            return {
                modal: action.payload,
                open: true
            };
        case 'CLOSE_MODAL':
            return {
                modal: null,
                open: false
            };
        default:
            return initialState;
    }
}
