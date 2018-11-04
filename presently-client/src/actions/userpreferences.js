import { UPDATE_PREF,
	GET_AVAIL_PREF,
	STORE_PREF
} from './types';

import { availPrefURL,
				 postPrefURL } from '../config/config';

import store from '../store'


function changePref(name, description, user){
	result = postPref(name, description, user)
	return {
		type: UPDATE_PREF,
		payload: {pref}
	}
}

function getAvailPref(){
	let results = availPref()
	return {
		type: GET_AVAIL_PREF,
		payload: {
			request: availPref
		}
	}
}

function storePref(pref){
	return {
		type: STORE_PREF,
		payload: {
			pref
		}
	}
}


function postPref(name, description, user){

	var state = store.getState()
	token = `Token ${state.AccountActions.token}`

	header = new Headers({
							Accept: 'application/json',
							'Content-Type': 'application/json',
							Authorization: token
							})
	body = {
		name: name,
		description: description,
		user: user
	}

	jsonBody = JSON.stringify(body)

	const pref = fetch(postPrefURL,
		{
			method: 'POST',
			headers: header,
			body: jsonBody
		}).then(res=>{
			console.log("res: ", res)
			jsonRes = res.json()
			return jsonRes
		}).then(finalRes=>{
			console.log("posted pref!")
			console.log("finalRes: ", finalRes)
			console.log("typeof finalRes: ", typeof finalRes)

			return finalRes
			// store.dispatch(storePref(finalRes))
		})

	return pref
	console.log("pref: ", pref)
}


function availPref(){

	var state = store.getState()
	token = `Token ${state.AccountActions.token}`

	header = new Headers({
							Accept: 'application/json',
							'Content-Type': 'application/json',
							Authorization: token
							})

	const pref = fetch(availPrefURL,
		{
			method: 'GET',
			headers: header
		}).then(res=>{
			console.log("res: ", res)
			jsonRes = res.json()
			return jsonRes
		}).then(finalRes=>{
			// finalJsonRes = JSON.parse(finalRes)
			console.log("finalRes: ", finalRes)
			console.log("typeof finalRes: ", typeof finalRes)
			store.dispatch(storePref(finalRes))
		})

	console.log("pref: ", pref)
}

 
export { changePref, getAvailPref, postPref}
