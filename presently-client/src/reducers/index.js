import { combineReducers } from 'redux';

import Auth from './auth';
import Language from './language';
import Navigator from './navigation';
import ModalStatus from './modal';
import AccountActions from './accountactions';

import TextInputs from './inputfield';

import UserInfo from './userinformation'
import CartStatus from './shoppingcart';

export default combineReducers({
	Auth: Auth,
	Language: Language,
	Navigator: Navigator,
	ModalStatus: ModalStatus,
	AccountActions: AccountActions,
	TextInputs: TextInputs,
	UserInfo: UserInfo,
	CartStatus: CartStatus
});
