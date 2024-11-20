import React, { useState, useEffect } from 'react';
import './Journal.css'; 
import { Link } from 'react-router-dom';
import { saveJournalEntry, fetchJournalEntries } from '../services/journalService'; 

const Journal = () => {
    const [emotion, setEmotion] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [message, setMessage] = useState('');
    const [journals, setJournals] = useState([]); 
    const [showEntries, setShowEntries] = useState(false); 

    useEffect(() => {
        const getJournals = async () => {
            try {
                const entries = await fetchJournalEntries();
                setJournals(entries);
            } catch (error) {
                setMessage(error.message);
            }
        };

        getJournals();
    }, []);

    const handleEmotionClick = (altText) => {
        setEmotion(altText);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await saveJournalEntry(emotion, thoughts);
            setEmotion('');
            setThoughts('');
            
            const entries = await fetchJournalEntries();
            setJournals(entries); 
        } catch (error) {
            setMessage(error.message);
        }
    };
    

    const toggleEntriesVisibility = () => {
        setShowEntries((prevState) => !prevState); 
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
                    {['Happy', 'Calm', 'Frustrated', 'Scared', 'Sad'].map((emotionName, index) => (
                        <button
                            key={index}
                            className="emotionButton"
                            onClick={() => handleEmotionClick(emotionName)}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/emoji${index + 1}.png`}
                                alt={emotionName}
                                className="emotions"
                            />
                        </button>
                    ))}
                </div>
                <p className="mood">{emotion && `Today's emotion: ${emotion}`}</p>

                <textarea
                    className="thoughts"
                    placeholder="Reflect on Your Day"
                    rows="10"
                    cols="50"
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)}
                />

                <div className="submitButton">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/submit.png`}
                        alt="Submit"
                        className="submitButtonImage"
                        onClick={handleSubmit}
                    />
                </div>

                <div className="toggleButton" onClick={toggleEntriesVisibility}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/display.png`}
                        alt={showEntries ? 'Hide Entries' : 'Show Entries'}
                        className="toggleButtonImage"
                    />
                </div>
            </div>

            {/* Journal Entries Section */}
            {showEntries && (
                <div className="journalEntriesContainer">
                    <h2>Your Journal Entries</h2>
                    {journals.length > 0 ? (
                        journals.map((journal) => (
                            <div key={journal._id} className="journalEntry">
                                <p><strong>Date:</strong> {new Date(journal.date).toLocaleDateString()}</p>
                                <p><strong>Emotion:</strong> {journal.emotion}</p>
                                <p><strong>Thoughts:</strong> {journal.thoughts}</p>
                            </div>
                        ))
                    ) : (
                        <p>No journal entries found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Journal;
