import {
	DROP_DOWN_OPEN,
	DROP_DOWN_CLOSE
} from './types';

function openModal(modalStatus, screen) {
	return {
		type: DROP_DOWN_OPEN,
		payload: {
			modalStatus: modalStatus,
			screen: screen
		}
	}
}

function closeModal(modalStatus, screen) {
	return {
		type: DROP_DOWN_CLOSE,
		payload: {
			modalStatus: modalStatus,
			screen: screen
		}
	}
}

export { openModal, closeModal }
