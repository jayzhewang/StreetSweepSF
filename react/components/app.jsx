import React from 'react';
// import { Link } from 'react-router';
import Stats from './stats';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>StreetCleaningSF</h1>
        // <Link to='https://www.google.com'>Link to Google</Link>
        <Stats />
      </div>
    );
  }
}

export default App;
