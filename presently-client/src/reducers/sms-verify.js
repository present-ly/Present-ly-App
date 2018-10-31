import {
	OPEN_SMS_MODAL,
	CLOSE_SMS_MODAL,
	SEND_SMS_VERIFY,
} from './types'

function SMSAction(change) {
	return {
		type: SEND_SMS_VERIFY,
		payload: {change}
	}
}

function SMSModalOpen() {
	return {
		type: OPEN_SMS_MODAL
	}
}

function SMSModalClose() {
	return {
		type: CLOSE_SMS_MODAL
	}
}

export {SMSAction, SMSModalOpen,
			SMSModalClose}
