import { RELATIONSHIP_CHANGE,
  RELATIONSHIP_DONE,
  RELATIONSHIP_PAGE
} from './types';

import { relationUrl } from '../config/config';

import { convertTime,
         createTime } from '../utils/convert';

import store from '../store';

function startRelation(){
	return {
		type: RELATIONSHIP_CHANGE
	}
}

function finishRelation(){
	return {
		type: RELATIONSHIP_DONE
	}
}

function setRelationPage(action){
  return {
    type: RELATIONSHIP_PAGE,
    payload: {
      action
    }
  }
}


function postRelationship(
	user, name, relationship, sex,
	birthday){

	store.dispatch(startRelation)

	formatBday = convertTime(birthday)
	time = createTime()

	userinfo = store.getState().AccountActions
	token = userinfo.token

	uid = userinfo.uid

	data = JSON.stringify({
		user: uid,
		name: name,
		relationship: relationship,
		sex: sex,
		birthday: formatBday,
		time_created: createTime()
	})

	header = new Headers({
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Token ${token}`
	})

	let res = fetch(relationUrl, {
		method: 'POST',
		headers: header,
		body: data
	}).then((response)=>response.json()).then(
		(jsonRes)=>{
			console.log("jsonRes: ", jsonRes)
			return store.dispatch(finishRelation)
		})

	return res
}


export { postRelationship, setRelationPage }
