import { connect } from 'react-redux';
import Reminder from './reminder';
import { saveReminder,
         getReminder } from '../../actions/reminder_actions';

const mapStateToProps = state => ({
  addresses: state.addresses,
  reminders: state.reminders
});

const mapDispatchToProps = dispatch => ({
  saveReminder: rem => dispatch(saveReminder(rem)),
  getReminder: () => dispatch(getReminder())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
