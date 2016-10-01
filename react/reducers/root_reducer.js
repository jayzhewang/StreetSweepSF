import { combineReducers } from 'redux';
import AddressReducer from './address_reducer';
import ScheduleReducer from './schedule_reducer';
import GeocoderReducer from './geocoder_reducer';

const RootReducer = combineReducers({
  addresses: AddressReducer,
  schedules: ScheduleReducer,
  geocoders: GeocoderReducer
});

export default RootReducer;
