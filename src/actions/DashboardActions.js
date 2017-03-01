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
            let currency = localStorage.getItem('currency') ? localStorage.getItem('currency') : 'EUR';
            dispatch({
                type: 'DASHBOARD_RATES',
                payload: {
                    rates: data,
                    currency
                }
            })
            dispatch(loadTFA());
        }).catch(err => {
                console.log(err)
        });
    }
}

export function changeCurrency(name) {
    return (dispatch, getState) => {
        localStorage.setItem('currency', name);
        dispatch({
            type: 'DASHBOARD_CURRENCY',
            payload: name
        });
    }
}
