import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Avatar.css'; 

const Avatar = () => {

    const navigate = useNavigate(); // React Router hook

    const handleAvatarClick = (avatarPath) => {
        // Save the selected avatar to localStorage or pass it through navigation
        localStorage.setItem('selectedAvatar', avatarPath);
        console.log('Selected avatar: ',localStorage.getItem('selectedAvatar'));


        // Navigate back to the profile page
        navigate('/profile'); // Change '/profile' to the correct route if needed
    };


    return (
        <div className="container">
            <div className="chooseAvatar">
                <img src={`${process.env.PUBLIC_URL}/images/selectyouravatar.png`} alt="Select Your Avatar" className="selectavatar" />
                <div className="images">
                    <img src={`${process.env.PUBLIC_URL}/images/avatar1.png`} alt="Avatar 1" className="avatar" onClick={() => handleAvatarClick(`${process.env.PUBLIC_URL}/images/avatar1.png`)}/>
                    <img src={`${process.env.PUBLIC_URL}/images/avatar2.png`} alt="Avatar 2" className="avatar" onClick={() => handleAvatarClick(`${process.env.PUBLIC_URL}/images/avatar2.png`)}/>
                    <img src={`${process.env.PUBLIC_URL}/images/avatar3.png`} alt="Avatar 3" className="avatar"  onClick={() => handleAvatarClick(`${process.env.PUBLIC_URL}/images/avatar3.png`)}/>
                    <img src={`${process.env.PUBLIC_URL}/images/avatar4.png`} alt="Avatar 4" className="avatar" onClick={() => handleAvatarClick(`${process.env.PUBLIC_URL}/images/avatar4.png`)}/>
                    <img src={`${process.env.PUBLIC_URL}/images/avatar5.png`} alt="Avatar 5" className="avatar" onClick={() => handleAvatarClick(`${process.env.PUBLIC_URL}/images/avatar4.png`)}/>


                    {/* <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 5" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 6" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 7" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 8" className="avatar" /> */}
                </div>
            </div>
        </div>
    );
};

export default Avatar;