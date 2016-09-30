import { ScheduleConstants,
         receiveSchedule,
         receiveChromeSyncSche } from '../actions/schedule_actions';

import { getChromeSyncAPISche,
         setChromeSyncAPISche } from '../util/chrome_api_util';

import { fetchSchedules } from '../util/rails_api_util';

const ScheduleMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ScheduleConstants.REQUEST_SCHEDULE:
      const success = scheduleArr => dispatch(receiveSchedule(scheduleArr));
      const address = action.address;

      fetchSchedules(address, success);
      return next(action);
    default:
      return next(action);
  }
};

export default ScheduleMiddleware;
