import {
	REGISTER
} from '../actions/types'

const INITIAL_STATE = {
	username: null,
	password: null
}

const AccountAction = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER:
			if (state.passReg == state.passConReg){
				action.payload()

			return state
			}

			else {
				return state
			}

		default:
			return state
	}
}

export default AccountAction;
