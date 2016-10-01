import { AddressConstants,
         receiveChromeSync } from '../actions/address_actions';

import { getChromeSyncAPI,
         setChromeSyncAPI } from '../util/chrome_api_util';

const AddressMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case AddressConstants.GET_CHROME_SYNC:
      const success = function(obj){
        dispatch(receiveChromeSync(obj));
      };
      getChromeSyncAPI(success);
      return next(action);
    case AddressConstants.SET_CHROME_SYNC:
      const data = action.data;
      setChromeSyncAPI(data);
      return next(action);
    default:
      return next(action);
  }
};

export default AddressMiddleware;
