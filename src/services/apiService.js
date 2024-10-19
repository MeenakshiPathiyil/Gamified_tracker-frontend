import axios from 'axios';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/register', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
