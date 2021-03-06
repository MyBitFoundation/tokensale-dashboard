import {get, post} from 'services/Api';
import twoFactor from 'node-2fa';


export function loadTFA() {
    return (dispatch, getState) => {
        if(!getState().account.get('tfa')){
            let email = getState().account.get('email');
            let name = 'Mybit';
            let newSecret = twoFactor.generateSecret({name: 'Mybit', account: email});
            let url = `otpauth://totp/${name}?secret=${newSecret.secret}&issuer=${email}`
            dispatch({
                type: 'TFA_SECRET',
                payload: {
                    secret: newSecret.secret,
                    url
                }
            });
        }
    }
}

export function enableTFA(secret, password) {
    return (dispatch, getState) => {
        return new Promise ((resolve, reject) => {
            post('/users/enable-tfa', {secret, password}).then(data => {
                dispatch({
                    type: 'TFA_ENABLED',
                    payload: data
                });
                dispatch({
                    type: 'OPEN_TFA_CHANGED'
                });
                resolve(data);
            }).catch(error => {
                if(error.code === 403) {
                    window.location.href = __REDIRECT_URL__
                }
                reject(error)
            });
        })
    }
}

export function disableTFA(token, password) {
    return (dispatch, getState) => {
        return new Promise ((resolve, reject) => {
            post('/users/disable-tfa', {token, password}).then(data => {
                dispatch({
                    type: 'TFA_DISABLED',
                    payload: data
                });
                dispatch({
                    type: 'OPEN_TFA_CHANGED'
                });
                dispatch(loadTFA());
                resolve(data);
            }).catch(error => {
                if(error.code === 403) {
                    window.location.href = __REDIRECT_URL__
                }
                reject(error)
            });
        })
    }
}
