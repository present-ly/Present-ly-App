import {
	BIRTHDAY_CHANGE,
	GENDER_CHANGE,
	NAME_CHANGE,
	USERINFO_CHANGE
} from '../actions/types';


const INITIAL_STATE = {
	birthday: null,
	gender: null,
	name: null
}

const UserInformation = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case BIRTHDAY_CHANGE:
			console.log("birthday")
			state.birthday = action.payload.birthday
			return state
		
		case GENDER_CHANGE:
			console.log("gender change!")
			state.gender = action.payload.gender
			return state

		case NAME_CHANGE:
			console.log("name change!")
			state.name = action.payload.name
			return state

		case USERINFO_CHANGE:
			console.log("USERINFO_CHANGE")
			account = action.payload.account
			birthday = action.payload.birthday
			gender = action.payload.gender
			name = action.payload.name
			postForm = action.payload.postForm
			response = postForm(account, birthday, gender, name)

			console.log("response: ", response)
			return state

		default:
			return state
	}
}

export default UserInformation
