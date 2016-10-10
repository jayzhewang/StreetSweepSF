import { AddressConstants } from '../actions/address_actions';
import merge from 'lodash/merge';

const AddressReducer = (state = [], action) => {
  switch(action.type){
    case AddressConstants.RECEIVE_CHROME_SYNC:
      const storage = action.obj['sssf-addresses'];
      if(storage === undefined){
        return state;
      } else {
        return storage;
      }
    default:
      return state;
  }
};

export default AddressReducer;
