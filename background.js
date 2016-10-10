function showNotification(rem) {
  let data = rem['sssf-reminders'];
  let date = data[0].split('/');

  let year = date[2];
  let month = date[0] - 1;
  let day = date[1];
  let dataSplit = data[1].split(':');
  let fromHour = parseInt(dataSplit[0]);
  let fromMinute = parseInt(dataSplit[1]);
  let hoursBefore = parseInt(data[3]);
  let currentDate = new Date();
  let endTime = new Date(year, month, day, fromHour, fromMinute);
  let difference = (endTime - currentDate) / 3600000;

  if(difference < (hoursBefore + 0.166) &&
     difference > (hoursBefore - 0.166)){
    chrome.notifications.create('reminder', {
      type: 'basic',
      iconUrl: './assets/icons/broom-cross-48.png',
      title: 'Reminder:',
      message: `Street cleaning starts in ${hoursBefore} hours!`
    }, function(notificationId){});
  } else if (difference < (hoursBefore - 0.166)) {
    chrome.alarms.clear('sssf-remindme');
    chrome.storage.sync.set({'sssf-reminders': ""});
  }
}

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.storage.sync.get('sssf-reminders', showNotification);
});
