import { applyMiddleware } from 'redux';
import AddressMiddleware from './address_middleware';

const RootMiddleware = applyMiddleware(
  AddressMiddleware
);

export default RootMiddleware;
