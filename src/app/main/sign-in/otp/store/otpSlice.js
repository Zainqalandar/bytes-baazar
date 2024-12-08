import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOtpOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setOtpOpen } = otpSlice.actions;
export const getOtpState = ({ authentication }) => {
  return authentication?.otp?.isOpen;
};

export default otpSlice.reducer;
