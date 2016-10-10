import { connect } from 'react-redux';
import Address from './address';
import { getChromeSync,
         setChromeSync } from '../../actions/address_actions';
import { requestGeocoder } from '../../actions/geocoder_actions';
import { getReminder } from '../../actions/reminder_actions';
import { saveReminder } from '../../actions/reminder_actions';

const mapStateToProps = state => {
  return { addresses: state.addresses,
           schedules: state.schedules,
           geocoders: state.geocoders,
           reminders: state.reminders };
};

const mapDispatchToProps = dispatch => ({
  getChromeSync: () => dispatch(getChromeSync()),
  setChromeSync: change => dispatch(setChromeSync(change)),
  requestGeocoder: addressString => dispatch(requestGeocoder(addressString)),
  getReminder: () => dispatch(getReminder()),
  saveReminder: rem => dispatch(saveReminder(rem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
