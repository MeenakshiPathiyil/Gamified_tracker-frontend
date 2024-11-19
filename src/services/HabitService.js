import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/habits';

const addHabit = async (habitData) => {
    try {
        console.log('Sending request with: ', habitData);
        const response = await axios.post(API_BASE_URL, habitData, {
            withCredentials: true, // Ensure cookies are sent with the request
        });
        console.log('Response data: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding new habit:', error.response?.data || error.message);
        throw error;
    }
};

export default addHabit;
