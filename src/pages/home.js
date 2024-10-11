import React, {useState} from 'react';
import './home.css'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 

const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="container">
      <div className="menu">
        <button className="hamburger-menu">☰</button>
      </div>
      <div className="greeting">
        <h2>Greeting</h2>
        <button>Add Habit</button>
        <button>Browse Other Habits</button>
      </div>
      <div className="calendar-outer">
        <h2>Calendar</h2>
        <div className="calendar">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
      <div className="analytics">
        <h2>Analytics</h2>
      </div>
      <div className="todo">
        <h2>To Do List Overview</h2>
      </div>
      <div className="start-game">
        <h2>Start Game</h2>
      </div>
      <div className="shop">
        <h2>Shop</h2>
      </div>
      <div className="motivation">
        <h2>Motivation</h2>
      </div>
      <div className="journal">
        <h2>Journal</h2>
      </div>
    </div>
  );
};

export default Home;
