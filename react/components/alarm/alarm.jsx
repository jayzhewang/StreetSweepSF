import React from 'react';

class Alarm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newLabel: 'Activate alarm'
    };
    this.alarmName = 'remindme';
    this.toggleAlarm = this.toggleAlarm.bind(this);
  }

  componentDidMount(){
    this.props.requestAlarms();
  }

  checkAlarm(callback) {
    let hasAlarm = this.props.alarms.some(a=>{
      return a.name === this.alarmName;
    });
    let newLabel;
    if (hasAlarm) {
      this.setState({newLabel: 'Cancel alarm'});
    } else {
      this.setState({newLabel: 'Activate alarm'});
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
    if(this.props.alarms && this.props.alarms.length > 0){
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
