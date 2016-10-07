import { ReminderConstants } from '../actions/reminder_actions';

const ReminderReducer = (state = [], action) => {
  switch(action.type){
    case ReminderConstants.RECEIVE_REMINDER:
      const rems = action.rems;
      return rems;
    default:
      return state;
  }
};

export default ReminderReducer;
