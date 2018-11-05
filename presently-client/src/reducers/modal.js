import {
	DROP_DOWN_OPEN,
	DROP_DOWN_CLOSE
} from '../actions/types';


const INITIAL_STATE = {
	visiblePref: false,
	visibleProd: false
}

const ModalStatus = (state=INITIAL_STATE, action) => {

	switch (action.type) {

		case DROP_DOWN_OPEN:
			screen = action.payload.screen
			console.log("screen: ", screen)
			switch (screen) {

				case 'preferences':

					console.log("preferences!")
					console.log("action.payload.modalStatus: ", action.payload.modalStatus)
					console.log("action.payload.modalStatus: ", action.payload.modalStatus)

					state.visiblePref = action.payload.modalStatus

					newState = {...state,
						visiblePref: action.payload.modalStatus
					}

					console.log("Modal New State!")

					return newState

				case 'product':
					state.visibleProd = action.payload.modalStatus
					return state

				default:
					return state;
			}


		case DROP_DOWN_CLOSE:
			console.log("state: ", state)
			newState = {...state,
				visiblePref: false,
				visibleProd: false
			}

			return newState;

		default:
			return state;
	}
}

export default ModalStatus;
