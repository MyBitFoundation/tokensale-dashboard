import {get} from 'services/Api';

export function referrals() {
    return (dispatch,getState) => {
        return new Promise((resolve,reject) => {
            get('/users/referrals').then(data => {
                dispatch({
                    type: 'AFFILIATES_REFERRALS',
                    payload: data
                });
                resolve();
            }).catch(err => {
                if(err.code === 403) {
                    window.location.href = __REDIRECT_URL__
                }
                reject(err);
            })
        });
    }

}

export function sortBy(criterion) {
    return (dispacth, getState) => {
        dispacth({
            type: 'AFFILIATES_SORT',
            payload: criterion
        })
    }
}