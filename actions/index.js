import * as actions from '../constants/ActionTypes';
import Axios from 'axios';

export const inCre = () => {
	return {
		type: actions.INCRE,
	};
};

export const deCre = () => {
	return {
		type: actions.DECRE,
	};
};

export const getPostsMid = () => {
	return (dispatch) => {
		return Axios({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'get',
			data: null,
		}).then(({ data }) => {
			return dispatch(getPosts(data));
		});
	};
};

export const getPosts = (data) => {
	return {
		type: 'GET_POSTS',
		payload: data,
	};
};
