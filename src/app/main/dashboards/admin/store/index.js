import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';

const adminDashboardreducer = combineReducers({
  widgets,
});

export default adminDashboardreducer;
