export const ReminderConstants = {
  SAVE_REMINDER: 'SAVE_REMINDER',
  GET_REMINDER: 'GET_REMINDER',
  RECEIVE_REMINDER: 'RECEIVE_REMINDER',
  RECEIVE_SAVED_REMINDER: 'RECEIVE_SAVED_REMINDER'
};

export const saveReminder = rems => ({
  type: ReminderConstants.SAVE_REMINDER,
  rems
});

export const getReminder = () => ({
  type: ReminderConstants.GET_REMINDER
});

export const receiveReminder = rems => ({
  type: ReminderConstants.RECEIVE_REMINDER,
  rems
});

export const receiveSavedReminder = rems => ({
  type: ReminderConstants.RECEIVE_SAVED_REMINDER,
  rems
});
