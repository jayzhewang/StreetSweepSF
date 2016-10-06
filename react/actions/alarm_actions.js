export const AlarmConstants = {
  REQUEST_ALARMS: 'REQUEST_ALARMS',
  RECEIVE_ALARMS: 'RECEIVE_ALARMS',
  CREATE_ALARM: 'CREATE_ALARM',
  CANCEL_ALARM: 'CANCEL_ALARM'
};

export const requestAlarms = () => ({
  type: AlarmConstants.REQUEST_ALARMS
});

export const receiveAlarms = alarms => ({
  type: AlarmConstants.RECEIVE_ALARMS,
  alarms
});

export const createAlarm = (name, times) => ({
  type: AlarmConstants.CREATE_ALARM,
  name,
  times
});

export const cancelAlarm = name => ({
  type: AlarmConstants.CANCEL_ALARM,
  name
});
