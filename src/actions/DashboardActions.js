import {get, post} from 'services/Api';
import {loadTFA} from './TFAActions';

export function load() {
    return (dispatch, getState) => {
        get('/crowdsale/transactions').then(data => {
            dispatch({
                type: 'DASHBOARD_HISTORY',
                payload: data
            })
        }).then(() => {
            return get('/crowdsale/rates')
        }).then(data => {
            dispatch({
                type: 'DASHBOARD_RATES',
                payload: data
            })
            dispatch(loadTFA());
        }).catch(err => {
                console.log(err)
        });
    }
}
