import { DROP_DOWN } from './types';

function dropDownChange(action) {
	return {
		type: DROP_DOWN,
		payload: {action},
	}
}

export default dropDownChange;
