import React from 'react';

class Notification extends React.Component {
  constructor(props){
    super(props);
    
  }

  function showNotification(storedData) {
    window.console.log('reached notifications');
    chrome.notifications.create('reminder', {
      type: 'basic',
      iconUrl: './assets/icons/broom-cross-38.png',
      title: 'bruh',
      message: 'you got this bruh'
    }, function(notificationId){});
  }

  chrome.alarms.onAlarm.addListener(function(alarm){
    window.console.log('reached listener');
    chrome.storage.local.get('addresses', showNotification);
  });
}

export default Notification;
