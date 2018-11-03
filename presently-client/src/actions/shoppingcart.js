import { UPDATE_CART } from './types'


function updateCart(item) {

	return {
		type: UPDATE_CART,
		payload: { item }
	}
}

export { updateCart }
