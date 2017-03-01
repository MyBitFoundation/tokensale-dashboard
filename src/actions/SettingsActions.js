import {get, post} from 'services/Api';

export function changePassword(params) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            post('/users/change-password', params).then(data => {
                dispatch({
                    type: 'OPEN_PASSWORD_CHANGED'
                });
                
                resolve(data)
            }).catch(err => {
                    reject(err)
            });
        })
    }
}
