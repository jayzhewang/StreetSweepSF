import React from 'react';
import AlarmContainer from '../alarm/alarm_container';

class Reminder extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.schedules){
      return (
        <div className='reminder-list'>
          <h1>Setup Chrome Reminders</h1>
          <div>
            {this.props.schedules[0]}
            <br />
            {this.props.schedules[1]}:{this.props.schedules[2]}
          </div>

          <AlarmContainer />
        </div>
      );
    } else {
      return (
        <AlarmContainer />
      );
    }
  }
}

export default Reminder;
