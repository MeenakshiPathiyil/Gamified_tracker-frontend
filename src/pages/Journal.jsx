import React, { useState } from 'react';
import './Journal.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const Journal = () => {
    const [emotion, setEmotion] = useState(''); // State to store the selected emotion
    const [thoughts, setThoughts] = useState(''); // State to store the journal content
    const [message, setMessage] = useState(''); // State for displaying success/error message

    const handleEmotionClick = (altText) => {
        setEmotion(altText); // Update the emotion state with the alt text
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/journal', {
                emotion,
                thoughts,
            });
            setMessage('Journal entry saved successfully!');
        } catch (error) {
            console.error('Error submitting journal:', error);
            setMessage('Error submitting journal. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="menu">
                <button className="hamburgerMenu">
                    <Link to="/home">
                        <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="Menu" className="menuImage" />
                    </Link>
                </button>
            </div>

            <div className="journal">
                <h1>Journal</h1>
                <div className="imageContainer">
                    <button className="emotionButton" onClick={() => handleEmotionClick('Happy')}>
                        <img src={`${process.env.PUBLIC_URL}/images/emoji1.png`} alt="Happy" className="emotions" />
                    </button>
                    <button className="emotionButton" onClick={() => handleEmotionClick('Calm')}>
                        <img src={`${process.env.PUBLIC_URL}/images/emoji2.png`} alt="Calm" className="emotions" />
                    </button>
                    <button className="emotionButton" onClick={() => handleEmotionClick('Frustrated')}>
                        <img src={`${process.env.PUBLIC_URL}/images/emoji3.png`} alt="Frustrated" className="emotions" />
                    </button>
                    <button className="emotionButton" onClick={() => handleEmotionClick('Scared')}>
                        <img src={`${process.env.PUBLIC_URL}/images/emoji4.png`} alt="Scared" className="emotions" />
                    </button>
                    <button className="emotionButton" onClick={() => handleEmotionClick('Sad')}>
                        <img src={`${process.env.PUBLIC_URL}/images/emoji5.png`} alt="Sad" className="emotions" />
                    </button>
                </div>
                <p className="mood">{emotion && `Today's emotion: ${emotion}`}</p>

                <textarea 
                    className="thoughts" 
                    placeholder="Reflect on Your Day" 
                    rows="10" 
                    cols="50"
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)} // Handle input for thoughts
                />
                
                <div className="submitButton">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/submit.png`} 
                        alt="Submit" 
                        className="submitButtonImage" 
                        onClick={handleSubmit} 
                    />
                </div>

                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Journal;
