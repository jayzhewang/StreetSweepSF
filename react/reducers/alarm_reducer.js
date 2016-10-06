import { AlarmConstants } from '../actions/alarm_actions';

const AlarmReducer = (state = [], action) => {
  switch(action.type){
    case AlarmConstants.RECEIVE_ALARMS:
      const alarms = action.alarms;
      return alarms;
    default:
      return state;
  }
};

export default AlarmReducer;
