import * from './api'

test('good login', async () => {
	let data;
	try {
		data = await postRegister('notarealaccount@gmail.com', 'testing');

	} catch(e) {
		console.log("error: ", e)
		fail();
	}
})
