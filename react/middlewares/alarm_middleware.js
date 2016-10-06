import { AlarmConstants,
         receiveAlarms } from '../actions/alarm_actions';

import { fetchAlarmsAPI,
         createAlarmAPI,
         cancelAlarmAPI } from '../util/alarm_api_util';

const AlarmMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case AlarmConstants.REQUEST_ALARMS:
      const success = alarms => dispatch(receiveAlarms(alarms));
      fetchAlarmsAPI(success);
      return next(action);
    case AlarmConstants.CREATE_ALARM:
      const name = action.name;
      const times = action.times;
      createAlarmAPI(name, times);
      return next(action);
    case AlarmConstants.CANCEL_ALARM:
      const name1 = action.name;
      cancelAlarmAPI(name1);
      return next(action);
    default:
      return next(action);
  }
};

export default AlarmMiddleware;
