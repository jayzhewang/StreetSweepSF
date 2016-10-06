import React from 'react';

class Alarm extends React.Component {
  constructor(props){
    super(props);

    this.alarmName = 'remindme';
  }

  componentDidMount(){
    this.props.requestAlarms();
    document.querySelector('#toggleAlarm').addEventListener('click', this.doToggleAlarm.bind(this));
    this.checkAlarm();
  }

  componentDidUpdate(){
    if(this.props.alarms !== undefined){
      this.checkAlarm();
    }
  }

  checkAlarm(callback) {
    let hasAlarm = this.props.alarms.some(a=>{
      return a.name === this.alarmName;
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
    window.console.log(this);
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
    return(
      <div id="info">
        <button id="toggleAlarm">Activate alarm</button>
      </div>
    );
  }
}

export default Alarm;
