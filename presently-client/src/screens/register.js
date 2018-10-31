import {
	REGISTER
} from '../actions/types'

const INITIAL_STATE = {
	email: null,
	password: null
}

function postRegister(action) {

	const info = JSON.stringify({email: action.payload.email,
			password: action.payload.password})

	const url = 'localhost:6007/api/login'

	const results = fetch(url,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}
			body: info,
		}
	).then((response) =>response.json()).then((responseJson)=> {
		console.log(responseJson)
		return responseJson
	})
}

const AccountAction = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER:
			return postRegister(action)

		default:
			return state
	}
}
