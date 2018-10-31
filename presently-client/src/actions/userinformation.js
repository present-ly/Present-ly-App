import {
	BIRTHDAY_CHANGE,
	GENDER_CHANGE,
	NAME_CHANGE,
	USERINFO_CHANGE
} from './types';

import axios from 'axios';

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

function postForm(accountInfo, birthday, gender, name){

	url =  URL + '/api/user-info'
	time = new Date().toLocaleDateString()

	authorization = 'Token ' + accountInfo.token

	console.log("url: ", url)
	console.log("authorization: ", authorization)

	var data = JSON.stringify({
		"birthday": birthday,
		"sex": gender,
		"name": name,
		"time_created": time,
		"user": accountInfo.user
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4) {
			console.log(this.responseText);
		}
	});

	xhr.open("POST", url);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", authorization);
	xhr.setRequestHeader("Cache-Control", "no-cache");
	xhr.setRequestHeader("Postman-Token", "1885bebb-3f9e-4d42-8d48-e2785c4fb010");

	xhr.send(data);

	console.log("xhr: ", xhr)
}

function postFormOld(accountInfo, birthday, gender, name){

	url =  URL + '/api/user-info'
	time = new Date().toLocaleDateString()

	console.log("!!!USING AXIOS!!!!!: ")

	authorization = 'Token ' + accountInfo.token
	console.log("authorization: ", authorization)

	const data = JSON.stringify({
		birthday: birthday,
		sex: gender,
		name: name,
		time_created: time,
		user: accountInfo.user,
	})

	console.log("data: ", data)

	config = {
		withCredentials: true,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Authorization': authorization
		}
	}

	console.log("config: ", config)


	axios.post(url, data, config).then((response)=>{
		console.log("response: ", response)
		return response.json()
	}).catch((error)=>{
		console.log("error: ", error)
	}).then((responseJson)=>{
		console.log("responseJson: ", responseJson)
	})
}


function postFormOld(accountInfo, birthday, gender, name){

	url =  URL + '/api/user-info'
	time = new Date().toLocaleDateString()

	console.log("accountInfo: ", accountInfo)

	authorization = 'Token ' + accountInfo.token

	console.log("authorization: ", authorization)

	const data = JSON.stringify({
		birthday: birthday,
		sex: gender,
		name: name,
		time_created: time,
		user: accountInfo.user,
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

			/*
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorizaton': authorization

			}),
			*/

			body: data,
		}
	).catch(function(error){
		console.log("error: ", error.message)
		throw error;
	}).then((response) => {
		console.log("response: ", response)
		const resJson = response.json()
		console.log(resJson)
	}
	).then((responseJson)=>{
		console.log(responseJson)
		return responseJson
	})
}

function submitUserInfoForm(account, birthday, gender, name) {
	console.log("submitting USER INFO FORM!")
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

export {birthdayChange, genderChange, nameChange, submitUserInfoForm}
