export const GeocoderConstants = {
  REQUEST_GEOCODER: 'REQUEST_GEOCODER',
  RECEIVE_GEOCODER: 'RECEIVE_GEOCODER'
};

export const requestGeocoder = addressString => ({
  type: GeocoderConstants.REQUEST_GEOCODER,
  addressString
});

export const receiveGeocoder = obj => ({
  type: GeocoderConstants.RECEIVE_GEOCODER,
  obj
});
