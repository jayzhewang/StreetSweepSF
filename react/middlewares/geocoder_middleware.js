import { GeocoderConstants,
         receiveGeocoder } from '../actions/geocoder_actions';

import { fetchCoords } from '../util/geocoder_api_util';

const GeocoderMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GeocoderConstants.REQUEST_GEOCODER:
      const addressString = action.addressString;
      const success1 = function(obj){
        dispatch(receiveGeocoder(obj));
      };
      fetchCoords(addressString, success1);
      return next(action);
    default:
      return next(action);
  }
};

export default GeocoderMiddleware;
