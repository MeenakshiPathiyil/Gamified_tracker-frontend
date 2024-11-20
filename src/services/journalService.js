import axios from 'axios';

const API_URL = 'http://localhost:5000/api/journal';

// Function to save a journal entry
export const saveJournalEntry = async (emotion, thoughts) => {
    try {
        const response = await axios.post(
            `${API_URL}/addjournal`,
            { emotion, thoughts },
            { withCredentials: true } // Include cookies for session-based authentication
        );
        return response.data; // Return the success message or journal object
    } catch (error) {
        console.error('Error saving journal entry:', error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || 'Failed to save journal entry');
    }
};

export const fetchJournalEntries = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/journal`, { withCredentials: true });
        return response.data; // Return the list of journal entries
    } catch (error) {
        console.error('Error fetching journal entries:', error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || 'Failed to fetch journal entries');
    }
};
