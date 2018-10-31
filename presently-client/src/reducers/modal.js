import {
	DROP_DOWN_OPEN,
	DROP_DOWN_CLOSE
} from '../actions/types';


const INITIAL_STATE = {
	isModalVisible: false,
}

const ModalStatus = (state=INITIAL_STATE, action) => {

	switch (action.type) {

		case DROP_DOWN_OPEN:
			console.log("action.payload.modalStatus: ", action.payload.modalStatus)
			return Object.assign({}, state, {
				isModalVisible: action.payload.modalStatus
			});

		case DROP_DOWN_CLOSE:
			console.log("state: ", state)
			return state;

		default:
			return state;
	}
}

export default ModalStatus;
