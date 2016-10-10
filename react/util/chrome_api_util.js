export const getChromeSyncAPI = successFunction => {
  chrome.storage.sync.get('sssf-addresses', successFunction);
};

export const setChromeSyncAPI = data => {
  chrome.storage.sync.set({'sssf-addresses': data});
};

export const setChromeSyncAPIReminder = (rem, successFunction) => {
  chrome.storage.sync.set({'sssf-reminders': rem}, successFunction);
};

export const getChromeSyncAPIReminder = successFunction => {
  chrome.storage.sync.get('sssf-reminders', successFunction);
};
