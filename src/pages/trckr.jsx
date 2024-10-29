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
    const [showSqr, setshowSqr]=useState(false);
    const [showDonut, setshowDonut] = useState(false);
    const [showBtn, setshowBtn]=useState(false);
    const [showWkHbt,setshowWkHbt]=useState(false);
    const [title, setTitle] = useState('');
    const[frequency, setFrequency] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);

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

    const handleAddHabit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const habitData = {
            title,
            frequency
        };
        console.log('Submitting habit: ', habitData);
        try {
            const result = await addHabit(habitData, token);
            console.log(result);
            closeModal();
        }
        catch(error) {
            console.error('Submission error: ', error);
        }
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
                            <input type="text" className="modalInput" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        </div><br/>
                        <div>
                            <label>Frequency: </label>
                            <select className="modalInput" value={frequency} onChange={(e) => setFrequency(e.target.value)} required>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="custom">Custom</option>
                            </select>
                        </div><br/>
                        <button type="Submit" className="modalButton">Submit</button>
                        <button type="button" className="modalButton" onClick={closeModal}>Cancel</button>
                    </form>
                </Modal>

        </div>

    );
}

export default HabitTracker;
