export const AddressConstants = {
  GET_CHROME_SYNC: 'REQUEST_CHROME_SYNC',
  SET_CHROME_SYNC: 'SET_CHROME_SYNC',
  RECEIVE_CHROME_SYNC: 'RECEIVE_CHROME_SYNC',
  REQUEST_GEOCODER: 'REQUEST_GEOCODER',
  RECEIVE_GEOCODER: 'RECEIVE_GEOCODER'
};

export const getChromeSync = () => ({
  type: AddressConstants.GET_CHROME_SYNC
});

export const setChromeSync = data => ({
  type: AddressConstants.SET_CHROME_SYNC,
  data
});

export const receiveChromeSync = obj => ({
  type: AddressConstants.RECEIVE_CHROME_SYNC,
  obj
});

export const requestGeocoder = addressString => ({
  type: AddressConstants.REQUEST_GEOCODER,
  addressString
});

export const receiveGeocoder = obj => ({
  type: AddressConstants.RECEIVE_GEOCODER,
  obj
});
