import {get, post} from 'services/Api';

export function changePassword(params) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            post('/users/change-password', params).then(data => {
                resolve(data)
            }).catch(err => {
                    reject(err)
            });
        })
    }
}
