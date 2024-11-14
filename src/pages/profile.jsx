import React, {useState, useEffect} from "react";
import './prof.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = ({ userId }) => {
    const [showprofileimg, setShowprofileimg] = useState(false);
    const [showAchie, setShowAchie] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const [profile, setProfile] = useState({ username: '', Joined: ''});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/profile', {headers: {Authorization: `Bearer ${token}`,},});
                const { username, Joined } = response.data;
                setProfile({
                    username,
                    Joined: new Date(Joined).toLocaleDateString(),
                });
            }
            catch(error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchProfile();
    }, []);

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
                    <span className="profileData">{profile.username}</span>
                </div>
                <div className="profileItem">
                    <img src={`${process.env.PUBLIC_URL}/images/joined.png`} alt="Joining Date" className="join" />
                    <span className="profileData">{profile.Joined}</span>
                </div>
                <Link to="/avatar"><img src={`${process.env.PUBLIC_URL}/images/changeavatar.png`} alt="Avatar" className="changeavatar" /></Link>
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
