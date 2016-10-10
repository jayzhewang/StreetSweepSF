import React from 'react';

class Alarm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newLabel: 'Activate alarms',
      reminders: [],
      showAlarm: false
    };
    this.alarmName = 'sssf-remindme';
    this.localReminders = [];
    this.localAlarms = [];

    this.toggleAlarm = this.toggleAlarm.bind(this);
    this.checkAlarm = this.checkAlarm.bind(this);
  }

  componentDidUpdate(){
    if(this.props.alarms &&
       this.props.alarms.length > this.localAlarms){
         this.localAlarms = this.props.alarms;
         this.setState({newLabel: 'Cancel alarms'});
    }
    $('.alarm-activation').toggleClass("highlighted", this.state.newLabel === 'Cancel alarms');
    $('.alarm-activation').toggleClass("highlighted:hover", this.state.newLabel === 'Cancel alarms');
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
      this.setState({newLabel: 'Activate alarms'});
    } else {
      this.setState({newLabel: 'Cancel alarms'});
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
          {delayInMinutes: 2, periodInMinutes: 2}
        );
      }
      this.checkAlarm();
      this.props.requestAlarms();
    });
  }

  showAlarm(){
    if(this.props.showAlarm){
      return (
        <div className='alarm-activation'>
          <div onClick={this.toggleAlarm}>{this.state.newLabel}</div>
        </div>
      );
    }
  }

  render(){
    return(
      <div>
        {this.showAlarm()}
      </div>
    );
  }
}

export default Alarm;
