import { NotificationConstants } from '../actions/notification_actions';

const NotificationReducer = (state = [], action) => {
  switch(action.type){
    case NotificationConstants.RECEIVE_NOTIFICATION:
      const notifications = action.notifications;
      return notifications;
    default:
      return state;
  }
};

export default NotificationReducer;
