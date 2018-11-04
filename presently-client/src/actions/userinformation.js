import {
	BIRTHDAY_CHANGE,
	GENDER_CHANGE,
	NAME_CHANGE,
	USERINFO_CHANGE,
	UPDATE_UID
} from './types';

import store from '../store';

URL = 'http://django-env.yd35fmneh2.us-west-1.elasticbeanstalk.com'

function birthdayChange(birthday){
	return {
		type: BIRTHDAY_CHANGE,
		payload: {birthday}
	}
}

function genderChange(gender){
	return {
		type: GENDER_CHANGE,
		payload: {gender}
	}
}

function nameChange(name){
	return {
		type: NAME_CHANGE,
		payload: {name}
	}
}

function updateUid(uid){
	return {
		type: UPDATE_UID,
		payload: { uid }
	}
}


function postForm(accountInfo, birthday, gender, name){

	url =  URL + '/api/user-info'

	// Creating timestamp
	newDate = new Date()
	var month = newDate.getMonth().toString()
	var year = newDate.getFullYear().toString()
  var day = newDate.getDate().toString()

	// Adding leading zero
	if (day.length == 1){
		day = `0${day}`
	}
	fullDate = `${year}-${month}-${day}`

	// Reformatting birthday
	splitBirthday = birthday.split('/')
	fullBirthday = `${splitBirthday[2]}-${splitBirthday[0]}-${splitBirthday[1]}`

	authorization = 'Token ' + accountInfo.token

	const data = JSON.stringify({
		user: accountInfo.email,
		birthday: fullBirthday,
		sex: gender,
		name: name,
		time_created: fullDate,
	})

	console.log("data: ", data)

	header = new Headers({
							Accept: 'application/json',
							'Content-Type': 'application/json'
							})

	header.append('Authorization', 'Token ' + accountInfo.token)

	console.log("header of post form: ", header)

	fetch(url,
		{
			credentials: 'include',
			method: 'POST',
			headers: header,
			body: data,
		}
	).catch(function(error){
		console.log("error: ", error.message)
		throw error;
	}).then((response) => {
		const servResponse = response
		console.log("response: ", response)
		const resJson = response.text()
		console.log("resJson: ", resJson)
		return resJson
	}
	).then((responseJson)=>{
		console.log("finalResponse: ", responseJson)
		const userId = JSON.parse(responseJson).id
		console.log("userId: ", userId)
		store.dispatch(updateUid(userId))
		return 'success'
	})
}

function submitUserInfoForm(account, birthday, gender, name) {
	return {
		type: USERINFO_CHANGE,
		payload: {
			account: account,
			birthday: birthday,
			gender: gender,
			name: name,
			postForm: postForm
		}
	}
}

export { birthdayChange, genderChange,
				 nameChange, submitUserInfoForm }
