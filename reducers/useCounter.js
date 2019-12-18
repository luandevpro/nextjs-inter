import { INCRE, DECRE } from '../constants/ActionTypes';

const initialState = 0;

const useCounter = (state = initialState, action) => {
	switch (action.type) {
		case INCRE:
			console.log(state);
			return state + 1;
		case DECRE:
			return state - 1;
		default:
			return state;
	}
};

export default useCounter;
