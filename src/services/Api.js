export function get(url) {
	return new Promise((resolve, reject) => {
		fetch(`${__API_URL__}${url}`, {
			method: 'GET',
			headers: new Headers(),
			cache: 'default',
			credentials: 'include'
		}).then(response => {
			let contentType = response.headers.get("content-type");
			
			if(response.ok) {
				if(contentType && contentType.indexOf("application/json") !== -1) {
					return response.json();
				} else {
					return response.text();
				}
			} else {
				throw {code: response.status, message: response.statusText};
			}
		})
			.then(data => {
				resolve(JSON.parse(data))
			}).catch(error => {
			reject(error);
		});
	})
}

export function post(url, params) {
	
	let details = params;
	let formBody = [];
	for(let property in details) {
		let encodedKey = encodeURIComponent(property);
		let encodedValue = encodeURIComponent(details[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");
	
	return new Promise((resolve, reject) => {
		
		fetch(`${__API_URL__}${url}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			credentials: 'include',
			body: formBody
		}).then(response => {
			let contentType = response.headers.get("content-type");
			
			if(response.ok) {
				if(contentType && contentType.indexOf("application/json") !== -1) {
					return response.json();
				} else {
					return response.text();
				}
			} else {
				throw {code: response.status, message: response.statusText};
			}
		})
			.then(data => {
				resolve(JSON.parse(data));
			})
			.catch((error) => {
				reject(error);
			})
	});
}
