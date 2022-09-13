import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import icon1 from './assets/icons/icon1.png';
import icon2 from './assets/icons/icon2.png';
import icon3 from './assets/icons/icon3.png';
import icon4 from './assets/icons/icon4.png';

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
}) => {
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
        <img src={icon1} alt='icon'></img>
        <div className='temperature'>{Math.floor(temp - 273.15)}</div>
        <FontAwesomeIcon icon={faCircleDot} className='temperaturering' />
        <div className='feelslike'>Looks like {feelslike} </div>
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
          <h1>Driving</h1>
          <p> Safe </p>
        </div>
      </div>
    </div>
  );
};
