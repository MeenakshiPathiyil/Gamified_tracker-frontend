import React, { useState } from "react";
import {addHabit, updateHabitProgress} from './services/HabitService';
import Calendar from 'react-calendar';
import './habit.css'; 

const HabitTracker = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [val, onChange] = useState(new Date());
    const [showGraph, setshowGraph] = useState(false);
    const [showSqr, setshowSqr]=useState(false);
    const [showDonut, setshowDonut] = useState(false);
    const [showBtn, setshowBtn]=useState(false);
    const [showWkHbt,setshowWkHbt]=useState(false);
    const [title, setTitle] = useState('');
    const[frequency, setFrequency] = useState('');

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
    }

    const openModal = () => setisModalOpen(true);
    const closeModal = () => setisModalOpen(false);

    const handleAddHabit = async () => {
        const habitData = {
            title,
            frequency
        };
        const result = await addHabit(habitData);
        console.log(result);
        closeModal();
    };

    // const handleUpdateProgress = async (habitId) => {
    //     const result = await updateHabitProgress(habitId, true);
    //     console.log(result);

    // };

    return (
        <div>
            <div className="rw1">
                <button className="smr" onClick={pg1}>Summary</button>
                <button className="hs" onClick={pg2}>Habits</button>
            </div>

            {showDonut && (
                <div className="dnt">Donut Graph</div>
            )}
            {showCalendar && (
                <div className="cal">
                    <Calendar
                        defaultActiveStartDate={new Date()}
                        onChange={onChange} value={val} />
                </div>
            )}
            {showGraph && (
                <div className="grph">Bar Graph</div> 
            )}
            {showSqr && (
                <div className="blank">Blank</div>
            ) }
                {showWkHbt &&(
                <div className="weekly">Weekly Calendar of Habits</div>
            )}
            {showBtn && (
                <div className="updt">
                <button className="add" onVlick={openModal}>+</button>
                <button className="minus">-</button>
                </div>
            )}

            <Modal 
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add habit Modal"
                className="Modal"
                overlayClassName="Overlay">
                    <h2>Add a new habit</h2>
                    <form>
                        <div>
                            <label>Habit Title: </label>
                            <input tyep="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label>Frequency: </label>
                            <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="custom">Custom</option>
                            </select>
                        </div>
                        <button type="Submit" onClick={handleAddHabit}>Submit</button>
                        <button type="button" onClick={closeModal}>Cancel</button>
                    </form>
                </Modal>

        </div>

    );
}

export default Habi;
