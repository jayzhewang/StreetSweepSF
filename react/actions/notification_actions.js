export const NotificationConstants = {
  REQUEST_NOTIFICATION: 'REQUEST_NOTIFICATION',
  RECEIVE_NOTIFICATION: 'RECEIVE_NOTIFICATION',
  CREATE_NOTIFICATION: 'CREATE_NOTIFICATION'
};

const requestNotification = () => ({
  type: NotificationConstants.REQUEST_NOTIFICATION
});

const receiveNotification = notifications => ({
  type: NotificationConstants.RECEIVE_NOTIFICATION,
  notifications
});

const createNotification = newNotification => ({
  type: NotificationConstants.CREATE_NOTIFICATION,
  newNotification
});
