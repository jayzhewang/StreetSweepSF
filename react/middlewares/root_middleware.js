import { applyMiddleware } from 'redux';
import StatsMiddleware from './stats_middleware';

const RootMiddleware = applyMiddleware(
  StatsMiddleware
);

export default RootMiddleware;
