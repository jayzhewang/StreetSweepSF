import { combineReducers } from 'redux';
import AddressReducer from './address_reducer';

const RootReducer = combineReducers({
  addresses: AddressReducer
});

export default RootReducer;
