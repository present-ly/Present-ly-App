import {
	EMAIL_LOGIN_CHANGE,
	EMAIL_REG_CHANGE,
	PASS_LOGIN_CHANGE,
	PASS_REG_CHANGE,
	PASS_CONREG_CHANGE
} from './types';

function changeEmailLogin(email){
	return {
		type: EMAIL_LOGIN_CHANGE,
		payload: {email}
	}
}


function changeEmailReg(email){
	console.log(email)
	return {
		type: EMAIL_REG_CHANGE,
		payload: {email}
	}
}

function changePasswordLogin(password){
	return {
		type: PASS_LOGIN_CHANGE,
		payload: {password}
	}
}

function changeConPasswordReg(password){
	return {
		type: PASS_CONREG_CHANGE,
		payload: {password}
	}
}

function changePasswordReg(password){
	return {
		type: PASS_REG_CHANGE,
		payload: {password}
	}
}


export {changeEmailLogin, changeEmailReg, changePasswordLogin, changeConPasswordReg, changePasswordReg};
