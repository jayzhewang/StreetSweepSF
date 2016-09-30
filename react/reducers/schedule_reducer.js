import { ScheduleConstants } from '../actions/schedule_actions';
import merge from 'lodash/merge';

const ScheduleReducer = (state = [], action) => {
  switch(action.type){
    case ScheduleConstants.RECEIVE_SCHEDULE:
      const schedules = action.scheduleArr;

      return merge([], state, schedules);
    default:
      return state;
  }
};

export default ScheduleReducer;
