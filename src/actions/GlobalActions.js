import {get} from 'services/Api';

export function initialize() {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            get('/users/info').then(data => {
                dispatch({
                    type: 'INIT_ACCOUNT',
                    payload: data
                });
                resolve();
            }).catch(err => {
                if(err.code === 403) {
                    window.location.href = __REDIRECT_URL__
                }
                reject(err);
            });
        });
    }
}

export function signOut() {
    return (dispatch, getState) => {
        get('/users/logout').then(data => {
            dispatch({
                type: 'LOGOUT'
            });
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
        get('/users/info').catch(err => {
            if(err.code === 403) {
                window.location.href = __REDIRECT_URL__
            }
        });
    }
}
