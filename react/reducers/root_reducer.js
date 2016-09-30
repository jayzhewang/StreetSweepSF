import { combineReducers } from 'redux';
import AddressReducer from './address_reducer';
import ScheduleReducer from './schedule_reducer';

const RootReducer = combineReducers({
  addresses: AddressReducer,
  schedules: ScheduleReducer
});

export default RootReducer;
