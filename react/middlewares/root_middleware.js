import { applyMiddleware } from 'redux';
import AddressMiddleware from './address_middleware';
import ScheduleMiddleware from './schedule_middleware';
import GeocoderMiddleware from './geocoder_middleware';
import NotificationMiddleware from './notification_middleware';
import AlarmMiddleware from './alarm_middleware';

const RootMiddleware = applyMiddleware(
  AddressMiddleware,
  ScheduleMiddleware,
  GeocoderMiddleware,
  NotificationMiddleware,
  AlarmMiddleware
);

export default RootMiddleware;
