export const ScheduleConstants = {
  REQUEST_SCHEDULE: 'REQUEST_SCHEDULE',
  RECEIVE_SCHEDULE: 'RECEIVE_SCHEDULE'
};

export const requestSchedule = address => ({
  type: ScheduleConstants.REQUEST_SCHEDULE,
  address
});

export const receiveSchedule = scheduleArr => ({
  type: ScheduleConstants.RECEIVE_SCHEDULE,
  scheduleArr
});
