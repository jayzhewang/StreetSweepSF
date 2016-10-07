export const ReminderConstants = {
  SAVE_REMINDER: 'SAVE_REMINDER',
  GET_REMINDER: 'GET_REMINDER',
  RECEIVE_REMINDER: 'RECEIVE_REMINDER'
};

export const saveReminder = rem => ({
  type: ReminderConstants.SAVE_REMINDER,
  rem
});

export const getReminder = () => ({
  type: ReminderConstants.GET_REMINDER
});

export const receiveReminder = rems => ({
  type: ReminderConstants.RECEIVE_REMINDER,
  rems
});
