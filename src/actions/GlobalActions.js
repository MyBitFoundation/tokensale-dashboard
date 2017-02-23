
export function initialize() {
    return (dispatch, getState) => {
        return new Promise ((resolve, reject) => {
            fetch(`${__API_URL__}/users/me`, {
                method  : 'GET',
                headers : new Headers(),
                cache   : 'default',
                credentials: 'include'
            }).then(response=>{
                let contentType = response.headers.get("content-type");

                if(response.ok){
                    if(contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json();
                    } else {
                        return response.text();
                    }
                } else {
                    throw { code : response.status, message : response.statusText };
                }
            })
            .then(data => {
                dispatch({
                    type: 'INIT_ACCOUNT',
                    payload: JSON.parse(data)
                })
                resolve(data);
            }).catch(err => {
                window.location.href = __REDIRECT_URL__
            });
        })
    }
}

export function signOut() {
    return (dispatch, getState) => {
        return new Promise ((resolve, reject) => {
            fetch(`${__API_URL__}/users/logout`, {
                method  : 'GET',
                headers : new Headers(),
                cache   : 'default',
                credentials: 'include'
            }).then(response=>{
                let contentType = response.headers.get("content-type");

                if(response.ok){
                    if(contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json();
                    } else {
                        return response.text();
                    }
                } else {
                    throw { code : response.status, message : response.statusText };
                }
            })
            .then(data => {
                dispatch({
                    type: 'LOGOUT'
                })
                window.location.href = __REDIRECT_URL__
                resolve(data);
            }).catch(err => {
                window.location.href = __REDIRECT_URL__
            });
        })
    }
}
