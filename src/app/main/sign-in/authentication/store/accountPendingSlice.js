import { createSlice } from '@reduxjs/toolkit';

const accountPendingSlice = createSlice({
  name: 'accountconfirmation',
  initialState: {
    pending: false,
  },
  reducers: {
    setAccountPending: (state, action) => {
      state.pending = action.payload;
    },
  },
});

export const { setAccountPending } = accountPendingSlice.actions;
export const accountPendingState = ({ authentication }) => {
  return authentication.accountconfirmation.pending;
};

export default accountPendingSlice.reducer;
