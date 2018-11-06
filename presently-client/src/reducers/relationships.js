import {
  RELATIONSHIP_CHANGE,
  RELATIONSHIP_DONE,
  RELATIONSHIP_PAGE
} from '../actions/types'

import store from '../store'

INITIAL_STATE = {
  relationShow: false
}


const RelationshipStatus = (state=INITIAL_STATE, action) => {
  switch (action.type){

    case RELATIONSHIP_CHANGE:
      return state

    case RELATIONSHIP_DONE:
      return state

    case RELATIONSHIP_PAGE:

      /*
      uinfo = store.getState().UserInformation
      uinfo.birthday = null
      uinfo.gender = null
      uinfo.name = null
      */

      state.relationShow = true

      return state

    default:
      return state
  }
}

export default RelationshipStatus 
