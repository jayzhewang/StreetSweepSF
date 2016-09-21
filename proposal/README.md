<h1>StreetCleaningSF</h1>
<p>StreetCleaningSF is a chrome extension designed to help you keep track of when and where to move your vehicle for the pesky street cleaning schedules here in San Francisco</p>
<p>StreetCleaningSF utilizes Google Maps API with a KML layer to accurately pin point your location.</p>
<p>StreetCleaningSF uses a dedicated server for fast querying.</p>
<p>Set Reminders in advance to move your vehicles.</p>
<p>Save your frequent parking locations and see an overview of upcoming cleaning schedules</p>

<h1>Technology</h1>
  <ul>
    <li style='disc'>Ruby on Rails</li>
    <li style='disc'>PostGIS</li>
    <li style='disc'>QGIS</li>
    <li style='disc'>Google Maps API</li>
    <li style='disc'>JavaScript</li>
    <li style='disc'>HTML5/CSS3</li>
  </ul>

<h1>Minimum Viable Product</h1>
  <ul>
    <li style='disc'>Search by address.</li>
    <li style='disc'>Fetches correct schedules from database based on location entered.</li>
    <li style='disc'>Chrome alert</li>
    <li style='disc'>Google Maps integration for view.</li>
  </ul>

<h1>Wireframes</h1>
  <p>Interactive calendar feature for an overview of cleaning schedules</p>
  <img src='https://s3.amazonaws.com/codementor_content/2014-Nov-wekk4/calendar.gif' />

  <p>Google Maps view of parking locations</p>
  <img src='https://github.com/jz-wang/StreetCleaningSF/blob/master/wireframes/scsf.jpg' />

  <p>Reminders for moving car</p>
  <img src='https://github.com/jz-wang/StreetCleaningSF/blob/master/wireframes/alert.png' />

<h1>Implementation Timeline<h1>
<h3>Monday 9/19</h3>
  <ul>
    <li type='disc'>Set up PostGIS database on localhost</li>
    <li type='disc'>Test querying</li>
  </ul>

<h3>Tuesday 9/20</h3>
  <ul>
    <li type='disc'>Add search bar</li>
    <li type='disc'>Test for fetching correct schedule from db</li>
  </ul>

<h3>Wednesday 9/21</h3>
  <ul>
    <li type='disc'>Integrate Google Maps with layer</li>
    <li type='disc'>Test fetching</li>
  </ul>

<h3>Thursday 9/22</h3>
  <ul>
    <li type='disc'>Add reminder feature</li>
    <li type='disc'>Add cache</li>
  </ul>

<h1>Bonus Features</h1>
  <ul>
    <li type='disc'>Google Maps view of clickable streets highlighted</li>
    <li type='disc'>Algorithm for finding best parking spots</li>
    <li type='disc'>Host on dedicated server</li>
  </ul>
