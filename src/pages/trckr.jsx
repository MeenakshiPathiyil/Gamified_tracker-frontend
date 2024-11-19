import React, { useState } from "react";
import addHabit from '../services/HabitService';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './habit.css'; 

Modal.setAppElement('#root');

const HabitTracker = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [val, onChange] = useState(new Date());
    const [showGraph, setshowGraph] = useState(false);
    const [showSqr, setshowSqr] = useState(false);
    const [showDonut, setshowDonut] = useState(false);
    const [showBtn, setshowBtn] = useState(false);
    const [showWkHbt, setshowWkHbt] = useState(false);
    const [title, setTitle] = useState('');
    const [frequency, setFrequency] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);
    
    const [customDays, setCustomDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    });

    const pg1 = () => {
        setShowCalendar(true); 
        setshowGraph(true); 
        setshowSqr(true);
        setshowDonut(true);
        setshowBtn(false);
        setshowWkHbt(false);
    };

    const pg2 = () => {
        setshowBtn(true);
        setshowWkHbt(true);
        setShowCalendar(false); 
        setshowGraph(false); 
        setshowSqr(false);
        setshowDonut(false);
    };

    const openModal = () => setisModalOpen(true);
    const closeModal = () => {
        setisModalOpen(false);
        setCustomDays({
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        });
        setFrequency('');
    };

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    };

    const handleDayChange = (day) => {
        setCustomDays((prevDays) => ({
            ...prevDays,
            [day]: !prevDays[day]
        }));
    };

    const handleAddHabit = async (e) => {
        e.preventDefault();
    
        const selectedDays = Object.keys(customDays).filter(day => customDays[day]);
    
        const habitData = {
            title,
            frequency,
            customDays: frequency === "custom" ? selectedDays : [],
        };
    
        console.log('Submitting habit: ', habitData);
        try {
            const result = await addHabit(habitData);
            console.log(result);
            closeModal();
        } catch (error) {
            console.error('Submission error: ', error);
        }
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
                        onChange={onChange} value={val} />
                </div>
            )}
            {showGraph && <div className="grph">Bar Graph</div>}
            {showSqr && <div className="blank">Blank</div>}
            {showWkHbt && <div className="weekly">Weekly Calendar of Habits</div>}
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
                            <input type="text" className="modalInput" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div><br />
                        <div>
                            <label>Frequency: </label>
                            <select className="modalInput" value={frequency} onChange={handleFrequencyChange} required>
                                <option value="">Select the frequency</option>
                                <option value="daily">Daily</option>
                                <option value="custom">Custom</option>
                            </select>
                        </div><br />
                        {frequency === "custom" && (
                            <div>
                                <label>Select days:</label><br />
                                <div className="customDays">
                                    {Object.keys(customDays).map((day) => (
                                        <label key={day}>
                                            <input
                                                type="checkbox"
                                                checked={customDays[day]}
                                                onChange={() => handleDayChange(day)}
                                            />
                                            {day.charAt(0).toUpperCase() + day.slice(1)}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button type="submit" className="modalButton">Submit</button>
                        <button type="button" className="modalButton" onClick={closeModal}>Cancel</button>
                    </form>
            </Modal>
        </div>
    );
}

export default HabitTracker;
