import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/habits'; 

const addHabit = async (habitData, token) => {
  try {
    console.log('Sending request with: ', habitData);
    const response = await axios.post(API_BASE_URL, habitData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log('Response data: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding new habit:', error.response?.data || error.message);
    throw error;
  }
};

// const updateHabit = async (habitId, updatedData) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/${habitId}`, updatedData);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating habit:', error);
//     throw error;
//   }
// };

export default addHabit;
