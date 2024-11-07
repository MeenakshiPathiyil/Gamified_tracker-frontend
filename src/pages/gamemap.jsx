import React,{useEffect, useState} from "react";
import './gm.css';
import { Link } from 'react-router-dom';

function gamemap(){
    const[showBG,setShowBG]=useState(false);

    useEffect(() => {
        setShowBG(true);
    },[]);

    return(
        <div name="gbody">
           {showBG && (
            <div className="gamebg"></div>
           )}
        </div>
    );
}
export default gamemap;