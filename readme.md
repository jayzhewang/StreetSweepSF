<img
src='http://res.cloudinary.com/cloudlicious/image/upload/v1476984208/sssfheader_keyvrh.png'
width='400'
height='91'/>
<br/>
<a href='https://chrome.google.com/webstore/detail/streetsweepsf/amepcflliholagifophjfhcffnfifbeh'>Chrome Store</a>
<p>Living in San Francisco and tired of the annoying street cleaning? StreetSweepSF will keep track and alert you before those pesky three-wheelers write you a ticket. Be worry free again!</p>
<p>StreetSweepSF utilizes a separate rails/postgresql server for querying, with a react/redux front end.</p>
<p>StreetSweepSF also utilizes the chrome API for synchronous storage, alerts and reminders.</p>

<h1>Features</h1>
<p>Overview with address, schedules, alerts.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476986356/sssf1_yemfva.png'
     width='400'
     height='250'/>
<p>Google Maps Integration for easy address lookup.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476987233/sssf2-cropped-whitespace_udvzx5.png'
     width='400'
     height='200'/>
<p>Desktop notifications.</p>
<img src='http://res.cloudinary.com/cloudlicious/image/upload/v1476986584/sssf3-cropped_vguzt2.png'
     width='400'
     height='90'/>

<h1>Implementations</h1>
<p>StreetSweepSF uses a dedicated rails server from which to fetch street cleaning data. The rails controller isolates the street name and queries the database.</p>
```ruby
if params[:address]
  @schedules = Schedule.where('"CORRIDOR" LIKE ?', "%#{params[:address].split(" ")[1]}%").all
...
  render :index
end
```

<p>When a user enters an address and hits get schedule, the app makes a GET request and upon receiving the raw data, parses it through the react schedules component and cleverly finds out the next street cleaning schedule.</p>

```javascript
_filterNextWeeks(schedules, week, earliestSchedule, plusAmount){
...
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
```

<p>When the user activates alerts and the numbers hours ahead to be reminded of, chrome alarms are created, and persists on a 2 minutes interval in the chrome background page. Chrome notification listens for alarms and are automatically created when the current time matches the criteria for desktop notifications. Chrome alarms and the corresponding notification are cleared once 20 minutes have passed after the initial alert.</p>

```javascript
if(difference < (hoursBefore + 0.166) &&
   difference > (hoursBefore - 0.166)){
  chrome.notifications.create('reminder', {
    type: 'basic',
    iconUrl: './assets/icons/broom-cross-48.png',
    title: 'Reminder:',
    message: `Street cleaning starts in ${hoursBefore} hours!`
  }, function(notificationId){});
} else if (difference < (hoursBefore - 0.166)) {
  chrome.alarms.clear('sssf-remindme');
  chrome.storage.sync.set({'sssf-reminders': ""});
}
```

<p>All react components subscribe to the store intelligently, some components that do not have parent-child relations also react to each other by listening to specific changes, thus rendering correctly.</p>

```javascript
componentDidUpdate(){
  if(this.props.schedules &&
    this.state.schedules.length === 0){
      let filtered = this.filterSchedules(this.props.schedules);
      if(filtered.length > 0 &&
         filtered.length !== this.state.schedules.length){
          this.schedules = filtered;
          this.setState({schedules: filtered});
      }
  }
  ...
}
```

<p>Chrome Storage API is used to sync user data across platforms.</p>
<p>Google Maps API is used for a quick address overview.</p>

<h1>Future Improvements</h1>
<ol>
  <li type='I'>Mobile SMS Alerts</li>
  <li type='I'>Ability to simultaneously keep track of multiple reminders</li>
  <li type='I'>Ability to manage reminders in a separate window.</li>
  <li type='I'>Algorithms for finding the best nearby re-parking location.</li>
  <li type='I'>Google Maps API integrated with KML data that users can interactively click on and find out more schedules information.</li>
  <li type='I'>Mobile Application</li>
</ol>
