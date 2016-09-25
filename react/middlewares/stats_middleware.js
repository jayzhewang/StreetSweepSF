import { StatsConstants,
         receiveChromeSync } from '../actions/stats_actions';

import { getChromeSyncAPI,
         setChromeSyncAPI } from '../util/stats_api_util';

const StatsMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case StatsConstants.GET_CHROME_SYNC:
      const success = function(obj){
        dispatch(receiveChromeSync(obj));
      };

      getChromeSyncAPI(success);
      return next(action);
    case StatsConstants.SET_CHROME_SYNC:
      const data = action.obj;
      setChromeSyncAPI(data);
      return next(action);
    default:
      return next(action);
  }
};

export default StatsMiddleware;
