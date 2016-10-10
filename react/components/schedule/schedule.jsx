import React from 'react';
import ReminderContainer from '../reminder/reminder_container';

Date.prototype.addDays = function(days){
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

class Schedule extends React.Component {
  constructor(props){
    super(props);
    this.addresses = [];
    this.state = {
      schedules: []
    };

    this.week = {
                 "Sun" : 0,
                 "Mon" : 1,
                 "Tues" : 2,
                 "Wed" : 3,
                 "Thu" : 4,
                 "Fri" : 5,
                 "Sat" : 6 };
    this.filterSchedules = this.filterSchedules.bind(this);
    this.getCurrentWeekNumber = this.getCurrentWeekNumber.bind(this);
    this._displaySchedule = this._displaySchedule.bind(this);
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
        if(filtered.length !== 0 &&
           filtered.length !== this.state.schedules.length){
          this.schedules = filtered;
          this.setState({schedules: filtered});
        }
    }
  }

  filterSchedules(schedules){
    let earliestSchedule = "Nothing";
    if (schedules.length === 0){
      return [];
    } else {
      earliestSchedule = this._filter(schedules, this.week, earliestSchedule);
      if (earliestSchedule[1] === "Nothing"){
        earliestSchedule = this._filterNextWeeks(schedules, this.week, earliestSchedule[1], 1);
      }

      if (earliestSchedule[1] === "Nothing"){
        earliestSchedule = this._filterNextWeeks(schedules, this.week, earliestSchedule[1], 2);
      }
      return earliestSchedule;
    }
  }

  _filter(schedules, week, earliestSchedule){
    let currentWeekNum = this.getCurrentWeekNumber();
    let currentDay = new Date();

    for(let i = 0; i < schedules.length; i ++){
      let weekMethod = `WEEK${currentWeekNum}OFMON`;
      let day = week[schedules[i]["WEEKDAY"]];
      if (schedules[i][weekMethod] === "Y" &&
          day > currentDay.getUTCDay()){
        if (earliestSchedule === "Nothing"){
          earliestSchedule = schedules[i];
        } else if (day < week[earliestSchedule["WEEKDAY"]]){
          earliestSchedule = schedules[i];
        }
      }
    }
    return [0, earliestSchedule];
  }

  _filterNextWeeks(schedules, week, earliestSchedule, plusAmount){
    let currentWeekNum = this.getCurrentWeekNumber() + plusAmount;
    if(currentWeekNum === 6){
      currentWeekNum = 1;
    } else if (currentWeekNum === 7){
      currentWeekNum = 2;
    }
    let currentDay = new Date();

    for(let i = 0; i < schedules.length; i ++){
      let weekMethod = `WEEK${currentWeekNum}OFMON`;
      let day = week[schedules[i]["WEEKDAY"]];
      if (schedules[i][weekMethod] === "Y"){
        if (earliestSchedule === "Nothing"){
          earliestSchedule = schedules[i];
        } else if (day < week[earliestSchedule["WEEKDAY"]]){
          earliestSchedule = schedules[i];
        }
      }
    }
    return [plusAmount, earliestSchedule];
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
        <div className='street-cleaning-info'>
          <h1>Next Street Cleaning:</h1>
          <ol>
            {this.setupSchedule(this.schedules, 'FORSCHEDULE')}
          </ol>
        </div>
      );
    }
  }

  _displaySchedule(){
    if(this.schedules !== undefined){
      return this.setupSchedule(this.schedules, "FORREMINDER");
    }
  }

  setupSchedule(obj, condition){
    let week = obj[0];
    let schedule = obj[1];
    let day = schedule['WEEKDAY'];
    let fromHour = schedule['FROMHOUR'];
    let toHour = schedule['TOHOUR'];

    let nextDate = new Date();
    let currentDay = nextDate.getUTCDay();
    nextDate.addDays(7 * week + (this.week[day] - currentDay));
    let date = this._convertDate(nextDate);

    if(condition === 'FORSCHEDULE'){
      return (
        <div className='street-cleaning-schedule'>
          <li type='A'>
            {date}
            <br />
            {`${day}, ${fromHour} - ${toHour}`}
          </li>
        </div>
      );
    } else {
      return [date, fromHour, toHour];
    }
  }

  _convertDate(dateObj) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    return [pad(dateObj.getMonth()+1), pad(dateObj.getDate()), dateObj.getFullYear()].join('/');
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
            <ReminderContainer schedules={this._displaySchedule()}/>
          </div>
      );
    }
  }
}

export default Schedule;
