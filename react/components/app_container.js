import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = state => {
  return { addresses: state['StatsReducer'] };
};

export default connect(
  mapStateToProps,
  null
)(App);
