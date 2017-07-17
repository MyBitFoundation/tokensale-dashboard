import {get} from 'services/Api';

export function referrals() {
    return (dispatch,getState) => {
        console.log(222);
        return new Promise((resolve,reject) => {
            get('/users/referrals').then(data => {
                dispatch({
                    type: 'AFFILIATES_REFERRALS',
                    payload: data
                }).catch(err => {
                    if(err.code === 403) {
                        window.location.href = __REDIRECT_URL__
                    }
                    reject(err);
                });
            })
        });
    }

}