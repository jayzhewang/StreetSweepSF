import React from 'react';

class Reminder extends React.Component {
  constructor(props){
    super(props);

    this.saveToChromeStorage = this.saveToChromeStorage.bind(this);
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
          <div id={`rem-save${i}`}
               onClick={()=>this.saveToChromeStorage(sche, i)}>
            Save
          </div>
        </div>
      );
    });
  }

  saveToChromeStorage(sche, i){
    let rems = [sche];
    if(this.props.reminders && this.props.reminders.length > 0){
        rems.concat(this.props.reminders);
    }
    this.props.saveReminder(rems);
    
    $(`#rem${i}`).removeClass('rem-list').addClass('rem-list-hightlighted');
    $(`#rem-save${i}`).remove();
    $(`#rem${i}`).append($('<div>Saved!</div>'));
  }

  render(){
    if(this.props.schedules){
      return (
        <div className='reminder-list'>
          <h1>Setup Chrome Reminders</h1>
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
