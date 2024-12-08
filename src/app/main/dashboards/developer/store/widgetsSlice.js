import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import useSnackbarMessage from "../../../hooks/useSnackbarMessage";
// tempComment: used in place of Api response until Api is created
const widgetData = {
    value: {
        accountBalance: {},
    },
};
export const getWidgets = new Promise((resolve, reject) => {
    createAsyncThunk('admin/getWidgets', async () => {
        const response = await axios.get('/admin');
        const data = await response.data;
        return data;
    });
});

export const checkin = createAsyncThunk(
    'checkin',
    async (payload, {dispatch}) => {
        try {
            const response = await axios.post(`/checkin`);
            const data = await response?.data;
            console.log('After Check-in', data)
            return data;
        } catch (error) {
            // Handle the error here
            console.error('Error:', error);
            console.log('Error is here');
            console.log('Error:', error?.response?.data?.message || error?.message);
            throw error; // You can re-throw the error or handle it as needed
        }
    }
);
export const checkout = createAsyncThunk(
    'checkout',
    async (payload, {dispatch}) => {
        try {
            const response = await axios.post(`/checkout`, payload);
            const data = await response.data;
            console.log('After Check-out', data)
            return data;
        } catch (error) {
            // Handle the error here
            console.error('Error:', error);
            console.log('Error is here');
            console.log('Error:', error?.response?.data?.message || error?.message);
            const errorMessage = error?.response?.data?.message || error?.message;
            return { error: { message: errorMessage } };
        }
    }
);

// Create an async action using createAsyncThunk
export const task = createAsyncThunk(
    'task',
    async (payload, {dispatch}) => {
        console.log('testing',payload)
        try {
            const response = await axios.post(`add/today-report`, payload);
            const data = await response.data;
            console.log('After Check-out', data)
            return data;
        } catch (error) {
            // Handle the error here
            console.error('Error:', error);
            console.log('Error is here');
            console.log('Error:', error?.response?.data?.message || error?.message);
            const errorMessage = error?.response?.data?.message || error?.message;
            return { error: { message: errorMessage } };
        }
    }
);

// export const createAppointmentType = createAsyncThunk(
//     'calendarApp/createAppointmentType',
//     async (appointmentData, thunkAPI) => {
//         const response = await axios.post(calendarConfig.createAppointmentType, appointmentData);
//         const { data } = await response.data;
//         const { user } = thunkAPI.getState();
//         thunkAPI.dispatch(getAppointmentTypes(user.id));
//         return data;
//     }
// );

export const addTaskLog = createAsyncThunk(
    'createTaskLog',
    async (payload, {dispatch}) => {
        try {
            const response = await axios.post(`/task-log/create`, {'do_tomorrow': 'enjoy',});
            const data = await response?.data;
            console.log('After Check-in', data)
            return data;
        } catch (error) {
            // Handle the error here
            console.error('Error:', error);
            console.log('Error is here');
            console.log('Error:', error?.response?.data?.message || error?.message);
            throw error; // You can re-throw the error or handle it as needed
        }
    }
);
const eventsAdapter = createEntityAdapter({});
const widgetsSlice = createSlice({
    name: 'widgets',
    initialState: widgetData,
    reducers: {
        getWidget: () => {
        },
    },
    extraReducers: {
        setWidgetData: (state, action) => widgetData,
        [getWidgets.fulfilled]: (state, action) => widgetData,
        [checkin.fulfilled]: (state, action) => action.payload,
    },
});

export const selectWidgets = ({adminDashboard}) => adminDashboard.widgets.value;

export default widgetsSlice.reducer;
