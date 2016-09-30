import { applyMiddleware } from 'redux';
import AddressMiddleware from './address_middleware';
import ScheduleMiddleware from './schedule_middleware';

const RootMiddleware = applyMiddleware(
  AddressMiddleware,
  ScheduleMiddleware
);

export default RootMiddleware;
