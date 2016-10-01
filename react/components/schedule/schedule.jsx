import React from 'react';

class Schedule extends React.Component {
  constructor(props){
    super(props);
    this.addresses = [];
    this.state = {
      schedules: []
    };

    this.filterSchedules = this.filterSchedules.bind(this);
    this.getCurrentWeekNumber = this.getCurrentWeekNumber.bind(this);
  }

  componentDidMount(){
    this.props.addresses.forEach(address=>{
      this.props.getSchedule(address);
    });
  }

  componentDidUpdate(){
    if(this.props.schedules !== undefined &&
       this.state.schedules.length === 0){
        let filtered = this.filterSchedules(this.props.schedules);
        window.console.log(this.props);
        if(filtered.length !== 0 && filtered.length !== this.state.schedules.length){
          this.schedules = filtered;
          this.setState({schedules: filtered});
        }
    }
  }

  filterSchedules(schedules){
    let week = {
                 "Sun" : 0,
                 "Mon" : 1,
                 "Tues" : 2,
                 "Wed" : 3,
                 "Thu" : 4,
                 "Fri" : 5,
                 "Sat" : 6 };
    let currentWeekNum = this.getCurrentWeekNumber();
    let currentDay = new Date();

    if (schedules.length === 0){
      return [];
    } else {
      for(let i = 0; i < schedules.length; i ++){
        let weekMethod = `WEEK${currentWeekNum}OFMON`;
        let day = week[schedules[i]["WEEKDAY"]];

        if (schedules[i][weekMethod] === "Y"){
          if(day > currentDay.getUTCDay()){
            return [schedules[i]];
          }
        }
      }
      return "Nothing";
    }
  }

  getCurrentWeekNumber(){
    let current = new Date();
    let firstDayOfMonth = current.getFullYear() + "-" +
                          (current.getMonth() + 1) + "-" + 1;
    let firstDay = new Date(firstDayOfMonth).getUTCDay();
    let currentDay = current.getUTCDate();

    let currentWeek = 0;
    if((currentDay - (7 - firstDay)) > 0){
      currentWeek = Math.ceil((currentDay - (7 - firstDay)) / 7);
    }
    return currentWeek;
  }

  displaySchedule(){
    if(this.schedules === undefined || this.props.length === 0){
      return (
        <div className='loader'></div>
      );
    } else {
      return (
        <div>
          {this.setupSchedule(this.schedules)}
        </div>
      );
    }
  }

  setupSchedule(obj){
    let day = obj['WEEKDAY'];
    let fromHour = obj['FROMHOUR'];
    let toHour = obj['TOHOUR'];

    if(obj === 'Nothing'){
      return (
        <div>
          No street cleaning this week!
        </div>
      );
    } else {
      return (
        <div>
          {`${day}, ${fromHour} - ${toHour}`}
        </div>
      );
    }
  }

  render(){
    if(this.props.schedules === undefined || this.props.length === 0){
      return(
        <div className='loader'></div>
      );
    } else {
      return(
        <div>
          {this.displaySchedule()}
        </div>
      );
    }
  }
}

export default Schedule;
