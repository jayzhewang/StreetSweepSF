import { StatsConstants } from '../actions/stats_actions';
import merge from 'lodash/merge';

const StatsReducer = (state = [], action) => {
  switch(action.type){
    case StatsConstants.RECEIVE_CHROME_SYNC:
      const storage = action.obj.addresses;
      if(storage === undefined){
        return state;
      } else {
        return storage;
      }
    default:
      return state;
  }
};

export default StatsReducer;
