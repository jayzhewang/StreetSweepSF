function showNotification(rem) {
  let data = rem['sssf-reminders'];
  let date = data[0].split('/');

  let year = date[2];
  let month = date[0] - 1;
  let day = date[1];
  let fromHour = data[1].split(':').join('.');
  let toHour = data[2];
  let hoursBefore = parseInt(data[3]);

  let currentDate = new Date();
  let endTime = new Date(year, month, day, fromHour);
  let difference = (endTime - currentDate) / 3600000;

  if(difference > (hoursBefore - 0.166)){
    chrome.notifications.create('reminder', {
      type: 'basic',
      iconUrl: './assets/icons/broom-cross-48.png',
      title: 'Reminder:',
      message: `Street cleaning starts in ${hoursBefore} hours!`
    }, function(notificationId){});
  } else if (difference < (hoursBefore - 0.166)) {
    chrome.alarms.clear('sssf-remindme');
  }
}

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.storage.sync.get('sssf-reminders', showNotification);
});
