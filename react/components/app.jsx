import React from 'react';
import AddressContainer from './address/address_container';

const App = ({children}) => {
  return (
    <div>
      <h1>StreetCleaningSF</h1>
      <AddressContainer />
    </div>
  );
};

export default App;
