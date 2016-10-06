export const fetchNotifications = successFunction => {
  chrome.storage.sync.get('notifications', successFunction);
};

export const createNotification = newNotification => {
  let { title, message } = newNotification;
  chrome.notifications.create('reminder', {
    type: 'basic',
    iconUrl: './assets/icons/broom-cross-38.png',
    title,
    message
  }, function(notificationId){});
};
