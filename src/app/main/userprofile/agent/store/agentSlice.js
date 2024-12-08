import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import agentApisConfig from './agentApisConfig';

export const getAgent = createAsyncThunk('users/agents/getAgent', async (id) => {
  const response = await axios.get(`${agentApisConfig.getAgent}/${id}`);
  const { data } = await response.data;
  return data;
});

const agentSlice = createSlice({
  name: 'agent',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getAgent.fulfilled]: (state, action) => action.payload,
  },
});

export const selectAgent = ({ agent }) => agent;

export default agentSlice.reducer;
