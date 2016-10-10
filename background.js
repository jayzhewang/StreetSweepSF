function showNotification(storedData) {
  window.console.log('in show');
  window.console.log(storedData);
  chrome.notifications.create('reminder', {
    type: 'basic',
    iconUrl: './assets/icons/broom-cross-38.png',
    title: 'bruh',
    message: 'you got this bruh'
  }, function(notificationId){});
}

chrome.alarms.onAlarm.addListener(function(alarm){
   chrome.storage.sync.get('reminders', showNotification);
});
