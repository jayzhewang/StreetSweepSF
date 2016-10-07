import { applyMiddleware } from 'redux';
import AddressMiddleware from './address_middleware';
import ScheduleMiddleware from './schedule_middleware';
import GeocoderMiddleware from './geocoder_middleware';
import AlarmMiddleware from './alarm_middleware';
import ReminderMiddleware from './reminder_middleware';

const RootMiddleware = applyMiddleware(
  AddressMiddleware,
  ScheduleMiddleware,
  GeocoderMiddleware,
  AlarmMiddleware,
  ReminderMiddleware
);

export default RootMiddleware;
