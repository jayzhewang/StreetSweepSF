import { connect } from 'react-redux';
import Notification from './notification';
import { requestNotification,
         createNotification } from '../../actions/notification_actions';

const mapStateToProps = state =>({
  schedules: state.schedules
});

const mapDispatchToProps = dispatch =>({
  requestNotification: () => dispatch(requestNotification()),
  createNotification: newNotification => dispatch(createNotification(newNotification))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
