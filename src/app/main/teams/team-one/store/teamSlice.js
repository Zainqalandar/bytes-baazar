import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'team/color',
  initialState: {
    checked: [],
    state: "green",
    data: {}
  },
  reducers: {
    toggleColor: (state, action) => {
        state.state = state.state === "green" ? "red" : "green";
    }
  },
});

export const { toggleColor } = teamSlice.actions;
export const selectColorState = ({ team }) => team;

export default teamSlice.reducer;