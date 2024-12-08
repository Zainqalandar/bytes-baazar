import { combineReducers } from '@reduxjs/toolkit';

import color from './teamSlice.js';

const reducer = combineReducers({
	color,
});

export default reducer;
