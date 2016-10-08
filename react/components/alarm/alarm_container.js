import { connect } from 'react-redux';
import Alarm from './alarm';
import { requestAlarms,
         createAlarm,
         cancelAlarm } from '../../actions/alarm_actions';

const mapStateToProps = (state, ownProps) => ({
  reminders: ownProps.reminders,
  alarms: state.alarms,
  addresses: ownProps.addresses
});

const mapDispatchToProps = dispatch => ({
  requestAlarms: () => dispatch(requestAlarms()),
  createAlarm: (alarmName, times) => dispatch(createAlarm(alarmName, times)),
  cancelAlarm: alarmName => dispatch(cancelAlarm(alarmName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarm);
