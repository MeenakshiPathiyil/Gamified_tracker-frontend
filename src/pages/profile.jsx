import React, {useState, useEffect} from "react";
import './prof.css';

function Profile(){
    const [showprofileimg, setShowprofileimg] = useState(false);
    const [showAchie, setShowAchie] = useState(false);
    const [showStats, setShowStats] = useState(false);


    useEffect(() => {
        setShowprofileimg(true); 
        setShowAchie(true);
        setShowStats(true);
    }, []);

    return (
        <div>
            
            {
                showprofileimg && ( 
                    <div className="img"><img src="logo.svg" alt="profile pic"></img></div>
                )
            }
            <div className="profiletxt">
            <h1 className="name">Name</h1>
            <h2 className="join">Date of joining</h2>
            <button>Change Avatar</button>
            </div>
            {
                showAchie && ( 
                    <div className="ach"></div>
                )
            }
            {
                showStats && ( 
                    <div className="sts"></div>
                )
            }
            
        </div>
    );
}

export default Profile;
