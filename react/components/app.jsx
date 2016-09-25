import React from 'react';
import StatsContainer from './stats/stats_container';

const App = ({children}) => {
  return (
    <div>
      <h1>StreetCleaningSF</h1>
      <StatsContainer />
    </div>
  );
};

export default App;
