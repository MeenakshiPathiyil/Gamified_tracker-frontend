import React, {useState, useEffect} from "react";
import './prof.css';
import axios from 'axios';

const Profile = ({ userId }) => {
    const [showprofileimg, setShowprofileimg] = useState(false);
    const [showAchie, setShowAchie] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const [userData, setUserData] = useState({ username: '', joined: ''});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/user/${userId}');
                setUserData(response.data);
            }
            catch(error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchUserData();
    }, [userId]);

    useEffect(() => {
        setShowprofileimg(true); 
        setShowAchie(true);
        setShowStats(true);
    }, []);

    return (
        <div>
            <div className="profileContainer">
            
            {
                showprofileimg && ( 
                    <div className="profilePic"><img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="profile pic"/></div>
                )
            }
            <div className="profiletxt">
                <div className="profileItem">
                    <img src={`${process.env.PUBLIC_URL}/images/username.png`} alt="Name" className="name" />
                    <span className="profileData">{userData.username}</span>
                </div>
                <div className="profileItem">
                    <img src={`${process.env.PUBLIC_URL}/images/joined.png`} alt="Joining Date" className="join" />
                    <span className="profileData">{new Date(userData.dateOfJoin).toLocaleDateString()}</span>
                </div>
                <button>Change Avatar</button>
            </div>
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
