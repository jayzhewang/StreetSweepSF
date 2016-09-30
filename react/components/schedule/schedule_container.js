import { connect } from 'react-redux';
import Schedule from './schedule';
import { requestSchedule,
         getChromeSyncSche,
         setChromeSyncSche } from '../../actions/schedule_actions';


const mapStateToProps = state => {
  return {
    addresses: state.addresses,
    schedules: state.schedules
  };
};

const mapDispatchToProps = dispatch => ({
  getSchedule: address => dispatch(requestSchedule(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
