export const getChromeSyncAPI = successFunction => {
  chrome.storage.sync.get('addresses', successFunction);
};

export const setChromeSyncAPI = data => {
  chrome.storage.sync.set({'addresses': data});
};
