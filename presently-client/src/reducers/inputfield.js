import {
	EMAIL_LOGIN_CHANGE,
	EMAIL_REG_CHANGE,
	PASS_LOGIN_CHANGE,
	PASS_REG_CHANGE,
	PASS_CONREG_CHANGE
} from '../actions/types'

const INITIAL_STATE = {
	emailLogin: '',
	passLogin: '',
	emailReg: '',
	passReg: '',
	passConReg: '',
	name: '',
}

const TextInputs = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_LOGIN_CHANGE:
			state.emailLogin = action.payload.email
			return state

	case EMAIL_REG_CHANGE:
			state.emailReg = action.payload.email
			return state

	case PASS_LOGIN_CHANGE:
			state.passLogin = action.payload.password
			return state

	case PASS_REG_CHANGE:
			state.passReg = action.payload.password
			return state

	case PASS_CONREG_CHANGE:
			state.passConReg = action.payload.password
			return state

		default:
			return state
	}
}

export default TextInputs;
