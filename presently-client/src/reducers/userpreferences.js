import  { UPDATE_PREF,
		GET_AVAIL_PREF,
		STORE_PREF } from '../actions/types'

const INITIAL_STATE = {
	preferences: null,
}

const PreferenceStatus = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_PREF:
			return state

		case GET_AVAIL_PREF:
			// state.preferences = action.type.[payload
			state.preferences = 'wait'
			const request = action.payload.request

		case STORE_PREF:
			state.preferences = action.payload.pref
			// return state

		default:
			return state
	}
}

export default PreferenceStatus
