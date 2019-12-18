import { combineReducers } from 'redux';
import useCounter from './useCounter';
import usePosts from './usePosts';

const reducers = combineReducers({
	counter: useCounter,
	posts: usePosts,
});

export default reducers;
