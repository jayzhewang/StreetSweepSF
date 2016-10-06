import { NotificationConstants,
         receiveNotification } from '../actions/notification_actions';

import { fetchNotifications,
         createNotification } from '../util/notification_api_util';

const NotificationMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case NotificationConstants.REQUEST_NOTIFICATION:
      const success = notifications => dispatch(receiveNotification);
      fetchNotifications(success);
      return next(action);
    case NotificationConstants.CREATE_NOTIFICATION:
      const newNotification = action.newNotification;
      createNotification(newNotification);
      return next(action);
    default:
      return next(action);
  }
};

export default NotificationMiddleware;
