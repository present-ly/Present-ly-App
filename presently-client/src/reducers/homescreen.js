import {
	GET_PRODUCTS
} from '../actions/types';


URL = 'http://django-env.yd35fmneh2.us-west-1.elasticbeanstalk.com'


function fetchProducts(action){

	return {
		type: GET_PRODUCTS,
		payload: {action}
	}
}
