import  { UPDATE_PREF,
		GET_AVAIL_PREF,
		STORE_PREF } from '../actions/types'

const INITIAL_STATE = {
	preferences: null,
}

const PreferenceStatus = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_PREF:
			return false

		case GET_AVAIL_PREF:
			state.preferences = false
			return state

		case STORE_PREF:
			// state.preferences = action.payload.pref
			newState = {
				preferences: action.payload.pref
				}
			console.log("newState: ", newState)
			return newState

		default:
			return state
	}
}

export default PreferenceStatus
