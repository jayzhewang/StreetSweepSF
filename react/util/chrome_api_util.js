export const getChromeSyncAPI = successFunction => {
  chrome.storage.sync.get('addresses', successFunction);
};

export const setChromeSyncAPI = data => {
  chrome.storage.sync.set({'addresses': data});
};

export const setChromeSyncAPIReminder = (rem, successFunction) => {
  chrome.storage.sync.set({'reminders': rem}, successFunction);
};

export const getChromeSyncAPIReminder = successFunction => {
  chrome.storage.sync.get('reminders', successFunction);
};
