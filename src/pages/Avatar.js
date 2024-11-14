import React from 'react';
import './Avatar.css'; 

const Avatar = () => {
    return (
        <div className="container">
            <div className="chooseAvatar">
                <h1>Select Your Avatar</h1>
                <div className="images">
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 1" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 2" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 3" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 4" className="avatar" />

                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 5" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 6" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 7" className="avatar" />
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar 8" className="avatar" />
                </div>
            </div>
        </div>
    );
};

export default Avatar;