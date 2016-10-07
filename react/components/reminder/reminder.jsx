import React from 'react';

class Reminder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hoursAhead: '6'
    };

    this.saveToChromeStorage = this.saveToChromeStorage.bind(this);
    this.changeHoursAhead = this.changeHoursAhead.bind(this);
  }

  componentDidUpdate(){
      window.console.log(this.state);
  }

  componentDidMount(){
    this.props.getReminder();
  }

  showReminders(){
    return [this.props.schedules].map((sche, i)=>{
      return (
        <div className='rem-list'
             id={`rem${i}`}
             key={`reminder${i}`}>
          <div>
            {sche[0]}
            <br />
            {sche[1]} - {sche[2]}
          </div>
          <div className='rem-list-last-child'
               id={`rem-save${i}`}
               onClick={()=>this.saveToChromeStorage(sche, i)}>
            Save
          </div>
        </div>
      );
    });
  }

  saveToChromeStorage(sche, i){
    let rems = sche;
    rems.unshift(this.state.hoursAhead);
    if(this.props.reminders && this.props.reminders.length > 0){
        rems.concat(this.props.reminders);
    }
    this.props.saveReminder(rems);

    $(`#rem${i}`).removeClass('rem-list').addClass('rem-list-hightlighted');
    $(`#rem-save${i}`).remove();
    $(`#rem${i}`).append($('<div>Saved!</div>').addClass('rem-list-last-child-saved'));
  }

  changeHoursAhead(event){
    this.setState({hoursAhead: event.target.value});
  }

  render(){
    if(this.props.schedules){
      return (
        <div className='reminder-list'>
          <h1>Setup Chrome Reminders</h1>
          <select id="hours"
                  onChange={this.changeHoursAhead}
                  value={this.state.hoursAhead}>
                  <option value="6">Remind 6 hrs ahead</option>
                  <option value="12">Remind 12 hrs ahead</option>
                  <option value="24">Remind 24 hrs ahead</option>
          </select>
          {this.showReminders()}
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
