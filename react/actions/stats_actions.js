export const StatsConstants = {
  GET_CHROME_SYNC: 'REQUEST_CHROME_SYNC',
  SET_CHROME_SYNC: 'SET_CHROME_SYNC',
  RECEIVE_CHROME_SYNC: 'RECEIVE_CHROME_SYNC'
};

export const getChromeSync = () => ({
  type: StatsConstants.GET_CHROME_SYNC
});

export const setChromeSync = (data) => ({
  type: StatsConstants.SET_CHROME_SYNC,
  data
});

export const receiveChromeSync = obj => ({
  type: StatsConstants.RECEIVE_CHROME_SYNC,
  obj
});
