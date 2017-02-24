import {get, post} from 'services/Api';

class ModalsActions {
    static openStep1(currency) {
        return (dispatch, getState) => {
            dispatch({
                type: 'OPEN_STEP_1',
                payload: currency
            });
        }
    }
    static closeModal(modal) {
        return (dispatch, getState) => {
            dispatch({
                type: 'CLOSE_MODAL'
            });
        }
    }

    static generate(currency) {
        return (dispatch, getState) => {
            post('/crowdsale/deposit', {currency}).then(data => {
                console.log(data)
                dispatch({
                    type: 'OPEN_STEP_2',
                    payload: data
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }
}

export default ModalsActions;
