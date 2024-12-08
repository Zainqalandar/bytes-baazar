import { createSlice } from '@reduxjs/toolkit';

const userDetailSlice = createSlice({
	name: 'users/data',
	initialState: [
		{
			id: 1,
			title: 'Best songs to listen while working',
			detail: 'Last edit: May 8th, 2015',
		},
		{
			id: 2,
			title: 'Useful subreddits',
			detail: 'Last edit: January 12th, 2015',
		},
	],
	reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        },
    },
});

export const { addUser, deleteUser } = userDetailSlice.actions;

export const selectUsersDetailData = ({ users }) => users.data;

export default userDetailSlice.reducer;
