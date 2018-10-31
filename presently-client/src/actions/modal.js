import {
	DROP_DOWN_OPEN,
	DROP_DOWN_CLOSE
} from './types';

function openModal(modalStatus) {
	return {
		type: DROP_DOWN_OPEN,
		payload: {modalStatus}
	}
}

function closeModal(modalStatus) {
	return {
		type: DROP_DOWN_CLOSE,
		payload: {modalStatus}
	}
}

export {openModal, closeModal}
