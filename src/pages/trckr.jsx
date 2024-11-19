import React, { useState } from "react";
import addHabit from '../services/HabitService';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './habit.css';

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

    const pg1 = () => {
        setShowCalendar(true);
        setShowGraph(true);
        setShowSqr(true);
        setShowDonut(true);
        setShowBtn(false);
        setShowWkHbt(false);
    };

    const pg2 = () => {
        setShowBtn(true);
        setShowWkHbt(true);
        setShowCalendar(false);
        setShowGraph(false);
        setShowSqr(false);
        setShowDonut(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setFrequency('');
        setCustomDays([]);
    };

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
        if (e.target.value !== 'custom') {
            setCustomDays([]);
        }
    };

    const handleCustomDayChange = (dayIndex) => {
        const updatedDays = [...customDays];
        if (updatedDays.includes(dayIndex)) {
            setCustomDays(updatedDays.filter((day) => day !== dayIndex));
        } else {
            setCustomDays([...updatedDays, dayIndex]);
        }
    };

    const handleAddHabit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const habitData = { title, frequency, customDays };
    
        const selectedDays = Object.keys(customDays).filter(day => customDays[day]);
    
        const habitData = {
            title,
            frequency,
            customDays: frequency === "custom" ? selectedDays : [],
        };
    
        console.log('Submitting habit: ', habitData);
        try {
            const result = await addHabit(habitData, token);
            setHabits([...habits, habitData]);
            const result = await addHabit(habitData);
            console.log(result);
            closeModal();
        } catch (error) {
            console.error('Submission error: ', error);
        }
    };
    

    const toggleCheckbox = (habitIndex, dayIndex) => {
        const updatedHabits = [...habits];
        if (!updatedHabits[habitIndex].checkedDays) {
            updatedHabits[habitIndex].checkedDays = Array(7).fill(false);
        }
        updatedHabits[habitIndex].checkedDays[dayIndex] = !updatedHabits[habitIndex].checkedDays[dayIndex];
        setHabits(updatedHabits);
    };

    return (
        <div>
            <div className="rw1">
                <button className="smr" onClick={pg1}>Summary</button>
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
            {showBtn && (
                <div className="updt">
                    <button className="add" onClick={openModal}>+</button>
                    <button className="minus">-</button>
                </div>
            )}

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

            <div className="habit-list">
                <h2>Current Habits</h2>
                {habits.map((habit, habitIndex) => (
                    <div className="habit-item" key={habitIndex}>
                        <h3>{habit.title}</h3>
                        {/* <p>Frequency: {habit.frequency}</p> */}
                        {(habit.frequency === 'daily' || habit.frequency === 'custom') && (
                            <div className="checkboxes">
                                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, dayIndex) => {
                                    if (habit.frequency === 'daily' || habit.customDays.includes(dayIndex)) {
                                        return (
                                            <label key={dayIndex}>
                                                <input
                                                    type="checkbox"
                                                    checked={habit.checkedDays?.[dayIndex] || false}
                                                    onChange={() => toggleCheckbox(habitIndex, dayIndex)}
                                                />
                                                {day}
                                            </label>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HabitTracker;
