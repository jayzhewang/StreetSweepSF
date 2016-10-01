import { GeocoderConstants } from '../actions/geocoder_actions';
import merge from 'lodash/merge';

const GeocoderReducer = (state = [], action) => {
  switch(action.type){
    case GeocoderConstants.RECEIVE_GEOCODER:
      const lat = action.obj["results"][0]["geometry"]["location"]["lat"];
      const lng = action.obj["results"][0]["geometry"]["location"]["lng"];
      return [lat, lng];
    default:
      return state;
  }
};

export default GeocoderReducer;
