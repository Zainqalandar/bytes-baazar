import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import entrepreneurApisConfig from './entrepreneurApisConfig';

export const getEntrepreneur = createAsyncThunk(
  'users/entrepreneurs/getEntrepreneur',
  async (id) => {
    const response = await axios.get(`${entrepreneurApisConfig.getEntrepreneur}/${id}`);
    const { data } = await response.data;
    return data;
  }
);

const entrepreneurSlice = createSlice({
  name: 'entrepreneur',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getEntrepreneur.fulfilled]: (state, action) => action.payload,
  },
});

export const selectEntrepreneur = ({ entrepreneur }) => entrepreneur;

export default entrepreneurSlice.reducer;
