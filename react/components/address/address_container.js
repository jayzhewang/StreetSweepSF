import { connect } from 'react-redux';
import { getChromeSync,
         setChromeSync } from '../../actions/address_actions';

import Address from './address';

const mapStateToProps = state => {
  return { addresses: state['AddressReducer'] };
};

const mapDispatchToProps = dispatch => ({
  getChromeSync: () => dispatch(getChromeSync()),
  setChromeSync: (change) => dispatch(setChromeSync(change))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
