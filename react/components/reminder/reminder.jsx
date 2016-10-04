import React from 'react';

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
        </div>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}

export default Reminder;
