import {get, post} from 'services/Api';

export function changePassword(params) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            post('/users/change-password', params).then(data => {
                dispatch({
                    type: 'OPEN_PASSWORD_CHANGED'
                });
                resolve(data);
	            dispatch({
		            type: 'INIT_ACCOUNT',
		            payload: data
	            });
            }).catch(err => {
                if(err.code === 403) {
                    window.location.href = __REDIRECT_URL__
                }
                reject(err)
            });
        })
    }
}
