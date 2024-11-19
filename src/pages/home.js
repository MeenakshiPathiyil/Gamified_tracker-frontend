import React, {useState, useEffect} from 'react';
import './home.css'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import { Link } from 'react-router-dom';
import Todo from '../components/todo';
import './Weather.css';

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState({ lat: null, lon: null });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=0b2b108cf1484e8981c90230243110&q=${lat},${lon}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchWeatherData(latitude, longitude);
        },
        (error) => setError("Location access denied"),
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation not supported by this browser.");
    }
    const fetchUsername = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/profile', {
          method: 'GET',
          credentials: 'include', // Include cookies for session
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
  
        const data = await response.json();
        setUsername(data.username); // Update the username state
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUsername();
  }, []);

  return (
    <div className="container">
      <div className="greeting">
      <div className="greet-user">Hello, {username}</div>

        <div className="button-container">
        

          <Link to="/tracker"><img src={`${process.env.PUBLIC_URL}/images/addhabit.png`} alt="Add Habit" className="button-item" /> </Link>
          <img src={`${process.env.PUBLIC_URL}/images/weather.png`} alt="Weather" className="button-item" onClick={openModal}/>
        </div>
      </div>

      <div className="calendarOuter">
        <img src={`${process.env.PUBLIC_URL}/images/calendar.png`} alt="Calendar" className="calendarpic" />
        <div className="calendar">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>

      <div className="analytics">
        <Link to="/profile"><img src={`${process.env.PUBLIC_URL}/images/analytics.png`} alt="Analytics" className="analyticspic" /></Link>
      </div>

      <div className="todo">
        <img src={`${process.env.PUBLIC_URL}/images/todolist.png`} alt="ToDo" className="todopic" />
        <Todo />
      </div>

      <div className="startGameLink">
      <Link to="/game"><img src={`${process.env.PUBLIC_URL}/images/startgame.png`} alt="Start Game" className="gamepic" /></Link>
      </div>

      <div className="shop">
        <Link to="/shop"><img src={`${process.env.PUBLIC_URL}/images/shop.png`} alt="Shop" className="shoppic" /></Link>
      </div>

      <div className="motivation">
        <img src={`${process.env.PUBLIC_URL}/images/motivation.png`} alt="Motivation" className="motivationpic" />
        <p className='moti-quote'>the secret of your future is hidden in your daily routine</p>
      </div>

      <div className="journalLink">
        <Link to="/journal"><img src={`${process.env.PUBLIC_URL}/images/journal.png`} alt="Journal" className="journalpic" /></Link>
      </div>

      {isModalOpen && (
        <div className="wmodal-overlay">
        <div className="wmodal">
          <div className="wmodal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Weather</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weatherData && (
              <div>
                <p>Location: {weatherData.location.name}, {weatherData.location.region}</p>
                <p>Temperature: {weatherData.current.temp_c}°C</p>
                <p>Condition: {weatherData.current.condition.text}</p>
                <img src={weatherData.current.condition.icon} alt="Weather icon" />
                <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
                <p>Humidity: {weatherData.current.humidity}%</p>
              </div>
            )}
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Home;
