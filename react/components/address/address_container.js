import { connect } from 'react-redux';
import Address from './address';
import { getChromeSync,
         setChromeSync } from '../../actions/address_actions';
import { requestGeocoder } from '../../actions/geocoder_actions';


const mapStateToProps = state => {
  return { addresses: state.addresses,
           schedules: state.schedules,
           geocoders: state.geocoders };
};

const mapDispatchToProps = dispatch => ({
  getChromeSync: () => dispatch(getChromeSync()),
  setChromeSync: change => dispatch(setChromeSync(change)),
  requestGeocoder: addressString => dispatch(requestGeocoder(addressString))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
