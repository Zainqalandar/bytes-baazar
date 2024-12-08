import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// tempComment: used in place of Api response until Api is created
const widgetData = {
  value: {
    accountBalance: {
    },
  },
};
export const getWidgets = new Promise((resolve, reject) => {
  createAsyncThunk('admin/getWidgets', async () => {
    const response = await axios.get('/admin');
    const data = await response.data;
    return data;
  });
});

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: widgetData,
  reducers: {
    getWidget: () => {},
  },
  extraReducers: {
    setWidgetData: (state, action) => widgetData,
    [getWidgets.fulfilled]: (state, action) => widgetData,
  },
});

export const selectWidgets = ({ adminDashboard }) => adminDashboard.widgets.value;

export default widgetsSlice.reducer;
