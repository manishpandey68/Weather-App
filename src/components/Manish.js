  import React , {useState} from 'react'
  import axios from 'axios';
  const Manish = () => {
      const [city, setCity] = useState();
      const [click , setClick] = useState();


      const fetchAPI = async (event) => {

          try {
              let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`9e2e1be9ef8ddd1bd405b36a4e1dbf3d`}`);
              console.log(response.data)
              setClick(response.data);
              setClick(event.target.value);
          }
          catch (error) {
              console.log(error);
          }
      }
      const handleClick = () => {
        fetchAPI();
      }
      const handleChange = (event) => {
          setCity(event.target.value);
      }
    return (
      <div className='weather'>
        <h1>Weather App</h1>
        <input type="text" placeholder='Enter City' onChange={handleChange} />
        <button onClick={handleClick}>Get Weather</button>
        <div className="main">
        {click &&
          <div>
              <p>City : {click.name}</p>
              <p>Temperature : {(click.main.temp - 273.15).toFixed(2)}°C</p>
              <p>Humidity : {click.main.humidity}%</p>
              <p>Wind : {click.wind.speed} Km/h</p>
          </div>
        }
        </div>
      </div>
    )
  }

  export default Manish
