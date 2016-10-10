import { ReminderConstants } from '../actions/reminder_actions';
import merge from 'lodash/merge';

const ReminderReducer = (state = [], action) => {
  switch(action.type){
    case ReminderConstants.RECEIVE_REMINDER:
      const rems = action.rems['sssf-reminders'];
      if(rems === undefined){
        return state;
      } else {
        return rems;
      }
    case ReminderConstants.RECEIVE_SAVED_REMINDER:
      const savedRems = action.rems;
      return savedRems;
    default:
      return state;
  }
};

export default ReminderReducer;
