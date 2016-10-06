export const fetchAlarmsAPI = successFunction => {
  chrome.alarms.getAll(successFunction);
};

export const createAlarmAPI = (alarmName, times) => {
  chrome.alarms.create(alarmName, times);
};

export const cancelAlarmAPI = alarmName => {
  chrome.alarms.clear(alarmName);
};
