
// Converst birthday to specific format
function convertTime(birthday){
	splitBirthday = birthday.split('/')
	fullBirthday = `${splitBirthday[2]}-${splitBirthday[0]}-${splitBirthday[1]}`
	return fullBirthday
}

// Creates time in specific format
function createTime(){

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

	return fullDate
}

export { convertTime, createTime };
