import { Search } from './Search';
import './styles.css';
import sunny from './assets/images/sunny/sunny1.jpg';
import evening from './assets/images/evening/evening1.jpg';
import night from './assets/images/night/night1.jpg';
import React, { useState } from 'react';
import { WeatherContainer } from './WeatherContainer';
export default function App() {
  const [value, setvalue] = useState('Kozhikode');
  const [temp, settemp] = useState('0');
  const [windspeed, setwindspeed] = useState('0');
  const [humidity, sethumidity] = useState('0');
  const [pressure, setpressure] = useState('0');
  const [drivingdifficulty, setdrivingdifficulty] = useState('0');
  const [query, setquery] = useState(false);
  const [feelslike, setfeelslike] = useState('');
  const [location, setlocation] = useState('Kozhikode');
  const [load, setload] = useState('true');
  const [id, setid] = useState('800');
  const daylight = [sunny, evening, night];
  let time = new Date().getHours();
  let dayicon = '';
  let back = '';
  if (time <= 15) {
    back = daylight[0];
    dayicon = 'morning';
  } else if ((time >= 16) & (time < 20)) {
    back = daylight[1];
    dayicon = 'evening';
  } else {
    back = daylight[2];
    dayicon = 'night';
  }
  console.log(back, time);
  const backroundstyles = {
    background: `url(${back})`,
    height: '100vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  console.log('rendering');

  console.log(temp, pressure);
  return (
    <div className='App' style={backroundstyles}>
      <div className='appcontainer'>
        <Search
          value={value}
          setvalue={setvalue}
          settemp={settemp}
          setwindspeed={setwindspeed}
          setpressure={setpressure}
          setdrivingdifficulty={setdrivingdifficulty}
          sethumidity={sethumidity}
          query={query}
          setquery={setquery}
          setfeelslike={setfeelslike}
          setlocation={setlocation}
          load={load}
          setload={setload}
          setid={setid}
        />
        <WeatherContainer
          value={value}
          setvalue={setvalue}
          settemp={settemp}
          setwindspeed={setwindspeed}
          setpressure={setpressure}
          setdrivingdifficulty={setdrivingdifficulty}
          sethumidity={sethumidity}
          query={query}
          setquery={setquery}
          temp={temp}
          windspeed={windspeed}
          pressure={pressure}
          drivingdifficulty={drivingdifficulty}
          humidity={humidity}
          feelslike={feelslike}
          location={location}
          dayicon={dayicon}
          setid={setid}
          id={id}
        />
      </div>
    </div>
  );
}
