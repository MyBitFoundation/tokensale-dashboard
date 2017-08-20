import {get, post} from '../services/Api';

class WithdrawActions {
	
	static withdraw(data) {
		return (dispatch, getState) => {
			return new Promise((resolve, reject) => {
				post('/tokens/withdraw', data).then(data => {
					resolve(data);
					dispatch({
						type: 'INIT_ACCOUNT',
						payload: data
					});
				}).catch(err => {
					if(err.code === 403) {
						window.location.href = __REDIRECT_URL__;
					}
					reject(err.response);
				});
			});
		}
	}
}

export default WithdrawActions;
