// // WeatherModal.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './WeatherModal.css'; // Your custom CSS file

// const WeatherModal = ({ isOpen, onClose }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (isOpen) {
//       const fetchWeather = async () => {
//         try {
//           const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`);
//           setWeatherData(response.data);
//         } catch (err) {
//           setError(err);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchWeather();
//     }
//   }, [isOpen]);

//   if (!isOpen) return null; // Do not render anything if modal is closed

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {weatherData && (
//           <div>
//             <h2>Weather in {weatherData.name}</h2>
//             <p>Temperature: {weatherData.main.temp} °C</p>
//             <p>Weather: {weatherData.weather[0].description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeatherModal;
