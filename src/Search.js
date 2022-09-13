import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
export const Search = ({
  value,
  setvalue,
  settemp,
  setwindspeed,
  setpressure,
  setdrivingdifficulty,
  sethumidity,
  query,
  setquery,
  setfeelslike,
  setlocation,
  load,
  setload,
  setid,
}) => {
  let path = `https://api.openweathermap.org/data/2.5/weather?q=${value}`;
  let apikey = `&appid=c38c4284f841f1515d0b2a261447e5c5`;
  let url = path + apikey;
  useEffect(() => {
    if (query || load) {
      const fetchdata = async () => {
        try {
          const res = await fetch(url);
          if (res.status === 404) {
            console.log('Wrong Location');
          }
          if (res.status === 200) {
            console.log(res);
            const body = await res.json();
            console.log(body);
            console.log(body.name);
            settemp(body.main.temp);
            setdrivingdifficulty(body.sys.visibility);
            setwindspeed(body.wind.speed);
            sethumidity(body.main.humidity);
            setpressure(body.main.pressure);
            setfeelslike(body.weather[0].description);
            setlocation(body.name);
            setid(body.weather[0].id);
          } else {
            throw new Error('Bad response');
          }
        } catch (err) {
          console.log(err);
        } finally {
          setvalue('');
          setquery(false);
          setload(false);
        }
      };
      fetchdata();
    }
  }, [query]);
  return (
    <div className='searchcontainer'>
      <input
        className='inputsearch'
        type='text'
        placeholder='Enter city'
        value={value}
        onChange={(event) => {
          setvalue(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            if (value) {
              console.log('enter pressed');
              setquery(true);
            } else {
              console.log('Enter valid location');
            }
          }
        }}
      ></input>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '220px',
        }}
      >
        <p className='search'>Press Enter for Search</p>
        <FontAwesomeIcon icon={faArrowTurnDown} className='searchicon' />
      </div>
    </div>
  );
};
