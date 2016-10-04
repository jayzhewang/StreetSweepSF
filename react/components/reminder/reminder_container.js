import { connect } from 'react-redux';
import Reminder from './reminder';

const mapStateToProps = (state, ownProps) => {
  return {schedules: ownProps.schedules};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
