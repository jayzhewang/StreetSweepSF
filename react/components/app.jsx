import React from 'react';
import AddressContainer from './address/address_container';

const App = ({children}) => {
  return (
    <div className='app'>
      <div className='app-title group'>
        <img src='../../assets/icons/broom-38.png' alt='broom'/>
        <h1><span>SS</span>SF</h1>
      </div>
      <AddressContainer />
    </div>
  );
};

export default App;
