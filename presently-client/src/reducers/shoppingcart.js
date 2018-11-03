
import {
	UPDATE_CART
} from '../actions/types'

let index = 0;
let indexSub = 0;

const INITIAL_CART = [
			{
				key: index++,
				header: 'header1',
				info: [
					{
						key: indexSub++,
						title: 'title',
						detail: 'detail'
					},
					{
						key: indexSub++,
						title: 'title2',
						detail: 'detail2'
					}
				]
			},
			{
			key: index++,
			header: 'header2',
			info: [
				{
					key: 0,
					title: 'title2',
					detail: 'detail2'
				}
				]
			}
		]

const INITIAL_STATE = {
	cart: INITIAL_CART
}

const CartStatus = (state=INITIAL_STATE, action) => {
	var cart = state.cart
	var cartHdr = cart.map(item=>item.header)
	switch (action.type) {
		case UPDATE_CART:
			let item = action.payload.item
			console.log("Updating Cart!")
			ixItem = cartHdr.indexOf(item.header)

			if (ixItem > -1){
				cart[ixItem].info.push(item.info)
			}

			else {
				cart.push(item)
			}
			return state

		default:
			return state
	}
}

export default CartStatus;
