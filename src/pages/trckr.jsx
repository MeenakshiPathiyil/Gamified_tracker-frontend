import React, { useEffect, useState } from "react";
import { addHabit, getHabits } from '../services/HabitService';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './habit.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

Modal.setAppElement('#root');

const HabitTracker = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [val, onChange] = useState(new Date());
    const [showGraph, setShowGraph] = useState(false);
    const [showSqr, setShowSqr] = useState(false);
    const [showDonut, setShowDonut] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [showWkHbt, setShowWkHbt] = useState(false);
    const [title, setTitle] = useState('');
    const [frequency, setFrequency] = useState('');
    const [customDays, setCustomDays] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [habits, setHabits] = useState([]);
    const [selectedHabitIndex, setSelectedHabitIndex] = useState(null);


    // const pg1 = () => {
    //     setShowCalendar(true);
    //     setShowGraph(true);
    //     setShowSqr(true);
    //     setShowDonut(true);
    //     setSelectedHabitIndex(true);
    //     setShowBtn(false);
    //     setShowWkHbt(false);
    // };

    const pg2 = () => {
        setShowBtn(true);
        setShowWkHbt(true);
        setShowCalendar(false);
        setShowGraph(false);
        setShowSqr(false);
        setShowDonut(false);
        setSelectedHabitIndex(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setFrequency('');
        setCustomDays([]);
    };

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const fetchedHabits = await getHabits();
                console.log('Fetched habits in component:', fetchedHabits);
                setHabits(fetchedHabits); 
            } catch (error) {
                console.error('Error fetching habits:', error.message);
            }
        };

        fetchHabits();
    }, []);

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
        if (e.target.value !== 'custom') {
            setCustomDays([]);
        }
    };

    const handleCustomDayChange = (dayIndex) => {
        setCustomDays((prevDays) =>
            prevDays.includes(dayIndex)
                ? prevDays.filter((day) => day !== dayIndex) 
                : [...prevDays, dayIndex]
        );
    };
    

    const handleAddHabit = async (e) => {
        e.preventDefault();
    
        const habitData = {
            title,
            frequency,
            customDays: frequency === "custom" ? customDays : [],
            completion: Array(7).fill(false),
        };
    
        console.log('Submitting habit: ', habitData);
        try {
            const result = await addHabit(habitData); 
            console.log(result);
            setHabits((prevHabits) => [...prevHabits, habitData]); 
            closeModal();
        } catch (error) {
            console.error('Submission error: ', error);
        }
    };
    
    
    

    const toggleCheckbox = async (habitIndex, dayIndex) => {
        const updatedHabits = [...habits];
    
        if (!updatedHabits[habitIndex].checkedDays) {
            updatedHabits[habitIndex].checkedDays = Array(7).fill(false);
        }
    
        updatedHabits[habitIndex].checkedDays[dayIndex] = !updatedHabits[habitIndex].checkedDays[dayIndex];
    
        setHabits(updatedHabits);
        
        sessionStorage.setItem("habits", JSON.stringify(updatedHabits));
    
        try {
            const result = await fetch('http://localhost:5000/api/habits/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    habitId: updatedHabits[habitIndex]._id, 
                    checkedDays: updatedHabits[habitIndex].checkedDays,
                })
            });
    
            const data = await result.json();
            console.log(data);
        } catch (error) {
            console.error('Error saving habit status:', error);
        }
    };
    


    return (
        <div>
            <Link to="/home"><img src={`${process.env.PUBLIC_URL}/images/sym.png`} alt="Logo" className="logo" /></Link>
            <div className="rw1">
                {/* <button className="smr" onClick={pg1}>Summary</button> */}
                <button className="hs" onClick={pg2}>Habits</button>
            </div>

            {showDonut && <div className="dnt">Donut Graph</div>}
            {showCalendar && (
                <div className="cal">
                    <Calendar
                        defaultActiveStartDate={new Date()}
                        onChange={onChange}
                        value={val}
                    />
                </div>
            )}
            {showGraph && <div className="grph">Bar Graph</div>}
            {showSqr && <div className="blank">Blank</div>}


            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add Habit Modal"
                className="Modal"
                overlayClassName="Overlay">
                <h2>Add a new habit</h2>
                <form onSubmit={handleAddHabit}>
                    <div>
                        <label>Habit Title: </label>
                        <input
                            type="text"
                            className="modalInput"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div><br />
                    <div>
                        <label>Frequency: </label>
                        <select
                            className="modalInput"
                            value={frequency}
                            onChange={handleFrequencyChange}
                            required
                        >
                            <option value="">Select the frequency</option>
                            <option value="daily">Daily</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div><br />
                    {frequency === 'custom' && (
                        <div>
                            <p>Select days:</p>
                            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, dayIndex) => (
                                <label key={dayIndex}>
                                    <input
                                        type="checkbox"
                                        checked={customDays.includes(dayIndex)}
                                        onChange={() => handleCustomDayChange(dayIndex)}
                                    />
                                    {day}
                                </label>
                            ))}
                        </div>
                    )}
                    <button type="submit" className="modalButton">Submit</button>
                    <button type="button" className="modalButton" onClick={closeModal}>Cancel</button>
                </form>
            </Modal>

            {showWkHbt && (
    <div className="habit-list">
        <h2>Current Habits</h2>
        {habits.length === 0 ? (
            <p>No habits to display</p>
        ) : (
            habits.map((habit, habitIndex) => (
                <div className="habit-item" key={habit._id}>
                    <h3>{habit.title}</h3>
                    <div className="checkboxes">
                        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, dayIndex) => (
                            (habit.frequency === 'daily' || habit.customDays.includes(dayIndex)) && (
                                <label key={dayIndex}>
                                    <input
                                        type="checkbox"
                                        checked={habit.checkedDays?.[dayIndex] || false}
                                        onChange={() => toggleCheckbox(habitIndex, dayIndex)}
                                    />
                                    {day}
                                </label>
                            )
                        ))}
                    </div>
                </div>
            ))
        )}
    </div>
)}

            {showBtn && (
                <div className="updt">
                    <button className="add" onClick={openModal}>+</button>
                    <button className="minus">-</button>
                </div>
            )}
        </div>
    );
};

export default HabitTracker;
