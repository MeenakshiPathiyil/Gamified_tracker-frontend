import React from 'react';
import './Journal.css'; 

const Journal = () => {
    return (
        <div className="container">
            <div className="menu">
                <button className="hamburgerMenu">☰</button>
            </div>
            <div className="journal">
                <h1>Journal</h1>
                <div className="imageContainer">
                <img src={`${process.env.PUBLIC_URL}/images/emoji1.png`} alt="Emotion 1" className="emotions" />
                <img src={`${process.env.PUBLIC_URL}/images/emoji2.png`} alt="Emotion 2" className="emotions" />
                <img src={`${process.env.PUBLIC_URL}/images/emoji3.png`} alt="Emotion 3" className="emotions" />

                </div>
                <textarea 
                    className="thoughts" 
                    placeholder="Enter your thoughts" 
                    rows="10" 
                    cols="50" 
                />
            </div>
        </div>
    );
};

export default Journal;