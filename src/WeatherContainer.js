import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import icon1 from './assets/icons/icon1.png';
import icon2 from './assets/icons/icon2.png';
import icon3 from './assets/icons/icon3.png';
import icon4 from './assets/icons/icon4.png';
import clearsky from './assets/weathericons/clearsky.png';
import cloudy from './assets/weathericons/cloudy.png';
import drizzle from './assets/weathericons/dust.png';
import dust from './assets/weathericons/dust.png';
import haze from './assets/weathericons/haze.png';
import night from './assets/weathericons/night.png';
import nightrain from './assets/weathericons/nightrain.png';
import snow from './assets/weathericons/snow.png';
import storm from './assets/weathericons/storm.png';
import sunnyrain from './assets/weathericons/sunnyrain.png';

export const WeatherContainer = ({
  value,
  setvalue,
  settemp,
  setwindspeed,
  setpressure,
  setdrivingdifficulty,
  sethumidity,
  query,
  setquery,
  temp,
  windspeed,
  pressure,
  drivingdifficulty,
  humidity,
  feelslike,
  location,
  dayicon,
  setid,
  id,
}) => {
  let icon = clearsky;
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  console.log(dayicon, id, drivingdifficulty);
  if ((dayicon === 'morning') & ((id >= 800) & (id <= 802))) {
    icon = clearsky;
  } else if ((dayicon === 'evening') & ((id >= 800) & (id <= 802))) {
    icon = haze;
  } else if ((dayicon === 'night') & (id >= 800) & (id <= 802)) {
    icon = night;
  } else if ((dayicon === 'morning') & ((id >= 500) & (id < 600))) {
    icon = sunnyrain;
  } else if ((dayicon === 'night') & ((id >= 500) & (id < 600))) {
    icon = nightrain;
  } else if ((id >= 300) & (id <= 400)) {
    icon = drizzle;
  } else if ((id >= 200) & (id < 300)) {
    icon = drizzle;
  } else if ((id >= 600) & (id < 700)) {
    icon = storm;
  } else if ((id >= 700) & (id < 800)) {
    icon = snow;
  } else if (id > 802) {
    icon = cloudy;
  }

  console.log(dayicon);
  var now = new Date();
  var day = days[now.getDay()];
  var month = months[now.getMonth()];
  var date = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  return (
    <div className='weathercontainer'>
      <div className='locationcontainer'>
        <FontAwesomeIcon icon={faLocationDot} className='locationicon' />
        <div className='locationtext'>{location}</div>
      </div>
      <div className='datecontainer'>
        <p>
          {day.substring(0, 3)},{date} {month} {hours}:{minutes}
        </p>
      </div>
      <div className='weathericoncontainer'>
        <div className='currentweathercontainer'>
          <img className='currentweather' src={icon} alt='icon'></img>
        </div>
        <div className='temperature'>{Math.floor(temp - 273.15)}</div>
        <FontAwesomeIcon icon={faCircleDot} className='temperaturering' />
        <div className='feelslike'>Looks like {feelslike}</div>
      </div>
      <div className='weatheradditionalinfo'>
        <div className='weatherinfocard'>
          <img src={icon1} alt='Pressure'></img>
          <h1>Pressure</h1>
          <p>{pressure} pascal</p>
        </div>
        <div className='weatherinfocard'>
          <img src={icon2} alt='Wind Speed'></img>
          <h1>Wind Speed</h1>
          <p>{windspeed} km/hr</p>
        </div>

        <div className='weatherinfocard'>
          <img src={icon4} alt='Humidity'></img>
          <h1>Humidity</h1>
          <p>{humidity}%</p>
        </div>
        <div className='weatherinfocard'>
          <img src={icon3} alt='Driving'></img>
          <h1>Visibility</h1>
          <p> {drivingdifficulty} meters </p>
        </div>
      </div>
    </div>
  );
};
