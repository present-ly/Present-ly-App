import {
	REGISTER,
	TOKEN_CHANGE,
	FETCH_TOKEN,
	REQUEST_TOKEN,
	UPDATE_TOKEN,
}

from './types'

import store from '../store'

URL = 'http://django-env.yd35fmneh2.us-west-1.elasticbeanstalk.com'

function storeToken(token){

	console.log("we are storing the token-->: ", token)
	console.log("typeof: ", typeof token)

	return {
		type: TOKEN_CHANGE,
		payload: {token}
	}
}


function updateToken(username, password) {

	let response = getToken(username, password)
	console.log("update token response: ", response)
	return response
}


function fetchToken(username, password) {
	console.log("fetch token called!")
	return {
		type: FETCH_TOKEN,
		payload: {
			username: username,
				password: password,
			request: getToken,
		}
	}
}


function getToken(username, password) {
		const url = URL + '/get-auth-token/'

		console.log("username: ", username)
		console.log("password: ", password)

		const info = JSON.stringify(
			{
				username: username,
				password: password
			}
		)

		console.log("Getting ready to fetch!")
		const results = fetch(url,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: info,
			}).then((response)=> {
			console.log("mid response!: ", response);
			return response.json()
		}).then((res)=>{
			console.log("final res: ", res)
			return res
		}).then((finRes)=>{
			store.dispatch(storeToken(finRes.token))
		})
}



function postRegister(email, password) {

	const info = JSON.stringify(
		{
		email: email,
		username: email,
		password: password
		}
	)

	const url = URL + '/api/test'

	console.log("info: ", info)
	console.log("url: ", url)

	const results = fetch(url,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: info,
		}
	).catch(function(error){
	console.log("error: ", error.message)
		throw error;
	}).then((response) =>response.json()).then((responseJson) => {
		console.log(responseJson)
		return responseJson
	}).then((jsonRes) => {
		console.log("email!: ", email)
		console.log("password: ", password)
		// console.log("store!:", store)

		return updateToken(email, password)

	})
}


function register(email, password) {
	return {
		type: REGISTER,
		payload: {
			action: postRegister,
			email: email,
			password: password,
			getToken: getToken
		}
	}
}

export {register, postRegister, getToken, storeToken, fetchToken, updateToken}
