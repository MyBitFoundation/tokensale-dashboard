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
            dispatch({
                type: 'MODAL_LOADING'
            });
            post('/crowdsale/deposit', {currency}).then(data => {
                setTimeout(() => {
                    dispatch({
                        type: 'OPEN_STEP_2',
                        payload: data
                    })
                }, 1000)
            }).catch(error => {
                setTimeout(() => {
                    dispatch({
                        type: 'MODAL_GENERATION_FAIL'
                    });
                }, 1000)
                if(err.code === 403) {
                    window.location.href = __REDIRECT_URL__
                }
            })
        }
    }
}

export default ModalsActions;
