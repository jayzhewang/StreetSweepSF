import { connect } from 'react-redux';
import Address from './address';
import { getChromeSync,
         setChromeSync } from '../../actions/address_actions';


const mapStateToProps = state => {
  return { addresses: state.addresses };
};

const mapDispatchToProps = dispatch => ({
  getChromeSync: () => dispatch(getChromeSync()),
  setChromeSync: (change) => dispatch(setChromeSync(change))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
