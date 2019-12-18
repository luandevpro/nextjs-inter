const initialState = null;

const usePosts = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_POSTS':
			return action.payload;
		default:
			return state;
	}
};

export default usePosts;
