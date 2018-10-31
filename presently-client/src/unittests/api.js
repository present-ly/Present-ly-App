
URL = 'http://django-env.yd35fmneh2.us-west-1.elasticbeanstalk.com'

function postRegister(email, password) {

	const info = JSON.stringify(
		{
		email: email,
		username: email,
		password: password
		}
	)

	const url = URL + '/api/test'

	const results = fetch(url,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: info,
		}
	).catch(function(error){
	console.log("error: ", error.message)
		throw error;
	}).then((response) =>response.json()).then((responseJson)=> {
		console.log(responseJson)
		return responseJson
	})
}

export { postRegister }
