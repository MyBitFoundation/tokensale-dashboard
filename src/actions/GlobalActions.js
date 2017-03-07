import {get} from 'services/Api';

export function initialize() {
    return (dispatch, getState) => {
        get('/users/me').then(data => {
            dispatch({
                type: 'INIT_ACCOUNT',
                payload: data
            });
        }).catch(err => {
            if(err.code === 403) {
                window.location.href = __REDIRECT_URL__
            }
        });
    }
}

export function signOut() {
    return (dispatch, getState) => {
        get('/users/logout').then(data => {
            dispatch({
                type: 'LOGOUT'
            })
            window.location.href = __REDIRECT_URL__;
        }).catch(err => {
            if(err.code === 403) {
                window.location.href = __REDIRECT_URL__
            }
        });
    }
}

export function checkAuthorization() {
    return (dispatch, getState) => {
        get('/users/me').catch(err => {
            if(err.code === 403) {
                window.location.href = __REDIRECT_URL__
            }
        });
    }
}
