import { ReminderConstants,
         receiveReminder,
         receiveSavedReminder } from '../actions/reminder_actions';

import { setChromeSyncAPIReminder,
         getChromeSyncAPIReminder } from '../util/chrome_api_util';

const ReminderMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ReminderConstants.SAVE_REMINDER:
      const newReminders = action.rems;
      const success1 = () => dispatch(receiveSavedReminder(newReminders));
      setChromeSyncAPIReminder(newReminders, success1);
      return next(action);
    case ReminderConstants.GET_REMINDER:
      const success = rems => dispatch(receiveReminder(rems));
      getChromeSyncAPIReminder(success);
      return next(action);
    default:
      return next(action);
  }
};

export default ReminderMiddleware;
