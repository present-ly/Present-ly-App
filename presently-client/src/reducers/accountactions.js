import {
	REGISTER,
	TOKEN_CHANGE, FETCH_TOKEN,
	UPDATE_UID
} from '../actions/types'

const INITIAL_STATE = {
	email: null,
	token: null,
	uid: null,
	response: 'none',
}

const AccountAction = (state=INITIAL_STATE, action) => {
	console.log("state: ", state)
	console.log("action: ", action)
	switch (action.type) {
		case REGISTER:
			email = action.payload.email
			password = action.payload.password
			const results = action.payload.action(email, password)
			state.email = email
			return state

		case TOKEN_CHANGE:
			token = action.payload.token

			if (token === undefined) {
					state.response = 'block'
					return state
			}

			else {
				console.log("payload token for token change: ", token)
				state.token = token
				console.log("state.token: ", state.token)
				return state
			}

		case FETCH_TOKEN:
			console.log("Fetching Token!")
			email = action.payload.username
			password = action.payload.password
			token = action.payload.request(email, password)

			console.log("token in action: ", token)

			// state.token = JSON.parse(token)

			console.log("fetch token state!!!: ", state)

			return state;

		case UPDATE_UID:
			console.log("updating uid")
			state.uid = action.payload.uid

			return state;

		default:
			return state
	}
}

export default AccountAction;
