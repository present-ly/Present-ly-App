import { UPDATE_PREF,
	GET_AVAIL_PREF,
	STORE_PREF
} from './types';

import { availPrefURL,
				 postPrefURL } from '../config/config';

import store from '../store'


function changePref(card){

	return () => {

		user = store.getState().AccountActions.uid
		name = card.name
		description = card.description
		pref = postPref(name, description, user)
		// store.dispatch(updatePref)

		return false

	}
}

function updatePref() {
	console.log("updating preferences")
	return {
		type: UPDATE_PREF
	}
}

function getAvailPref(){
	return {
		type: GET_AVAIL_PREF,
	}
}

function storePref(pref){
	console.log("storing prefs!")
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
		})

	return pref
	console.log("pref: ", pref)
}


function availPref(){
	return res = () =>{

		store.dispatch(getAvailPref)

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
		return pref
	}
}

 
export { changePref, getAvailPref, postPref, availPref}
