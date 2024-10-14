import React, { useState } from "react";

import Calendar from 'react-calendar';
import './habit.css'; 

function Habi() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [val, onChange] = useState(new Date());
    const [showGraph, setshowGraph] = useState(false);
    const [showSqr, setshowSqr]=useState(false);
    const [showDonut, setshowDonut] = useState(false);
    const [showBtn, setshowBtn]=useState(false);
    const [showWkHbt,setshowWkHbt]=useState(false);
    
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
                <button className="add">+</button>
                <button className="minus">-</button>
                </div>
            )}


        </div>

    );
}

export default Habi;
