import React from 'react';

class Alarm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newLabel: 'Activate alarms',
      reminders: []
    };
    this.alarmName = 'remindme';
    this.localReminders = [];

    this.toggleAlarm = this.toggleAlarm.bind(this);
  }

  componentDidUpdate(){
    let reminders = this.props.reminders;
    if(reminders &&
       (this.localReminders === undefined ||
        reminders.length > this.localReminders.length)){
      this.localReminders = reminders;
      this.setState({reminders: reminders});
    }
  }

  componentDidMount(){
    this.localReminders = this.props.reminders;
    this.props.requestAlarms();
  }

  checkAlarm(callback) {
    let hasAlarm = this.props.alarms.some(a=>{
      return a.name === this.alarmName;
    });

    if (hasAlarm) {
      this.setState({newLabel: 'Cancel alarms'});
    } else {
      this.setState({newLabel: 'Activate alarms'});
    }
    if (callback) callback(hasAlarm);
  }

  toggleAlarm() {
    this.checkAlarm( hasAlarm =>{
      if (hasAlarm) {
        this.props.cancelAlarm(this.alarmName);
      } else {
        this.props.createAlarm(
          this.alarmName,
          {delayInMinutes: 0.1, periodInMinutes: 0.1}
        );
      }
      this.checkAlarm();
    });
  }

  showAlarm(){
    if(this.props.reminders && this.props.reminders.length > 0){
      return (
        <button onClick={this.toggleAlarm}>{this.state.newLabel}</button>
      );
    } else {
      return "";
    }
  }

  render(){
    return(
      <div id="info">
        {this.showAlarm()}
      </div>
    );
  }
}

export default Alarm;
