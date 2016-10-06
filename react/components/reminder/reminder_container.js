import { connect } from 'react-redux';
import Reminder from './reminder';

const mapStateToProps = state => {
  return {alarms: state.alarms};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
