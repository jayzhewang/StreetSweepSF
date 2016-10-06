import React from 'react';

class Alarm extends React.Component {
  constructor(props){
    super(props);

    this.alarmName = 'remindme';
  }

  componentDidMount(){
    this.props.requestAlarm();
    document.querySelector('#toggleAlarm').addEventListener('click', this.doToggleAlarm);
    this.checkAlarm();
  }

  componentDidUpdate(){
    this.checkAlarm();
  }

  checkAlarm(callback) {
      let hasAlarm = this.props.alarms.some(a=>{
        return a.name == this.alarmName;
      });

      let newLabel;
      if (hasAlarm) {
        newLabel = 'Cancel alarm';
      } else {
        newLabel = 'Activate alarm';
      }

      document.getElementById('toggleAlarm').innerText = newLabel;
      if (callback) callback(hasAlarm);
    }

  doToggleAlarm() {
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

  render(){

  }
}

export default Alarm;
