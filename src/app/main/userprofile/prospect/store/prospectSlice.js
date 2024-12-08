import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import prospectApisConfig from './prospectApisConfig';

export const getProspect = createAsyncThunk('users/prospects/getProspect', async (id) => {
  const response = await axios.get(`${prospectApisConfig.getProspect}/${id}`);
  const { data } = await response.data;
  return data;
});

const prospectSlice = createSlice({
  name: "prospect",
  initialState: {},
  reducers: {},
  extraReducers: {
    [getProspect.fulfilled]: (state, action) => action.payload,
  },
});

export const selectProspect = ({ prospect }) => prospect;

export default prospectSlice.reducer;
