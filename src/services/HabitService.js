import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/habits';

export const addHabit = async (habitData) => {
    try {
        console.log('Sending request with: ', habitData);
        const response = await axios.post(API_BASE_URL, habitData, {
            withCredentials: true, 
        });
        console.log('Response data: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding new habit:', error.response?.data || error.message);
        throw error;
    }
};

export const getHabits = async () => {
  try {
      const response = await axios.get(`${API_BASE_URL}/getData`, {
          withCredentials: true,
          headers: {
              'Content-Type': 'application/json',
          },
      });
      console.log('Habits fetched from API:', response.data.habits); 
      return response.data.habits; 
  } catch (error) {
      console.error('Error fetching habits:', error.response || error.message);
      throw new Error(error.response?.data.message || 'Failed to fetch habits');
  }
};


