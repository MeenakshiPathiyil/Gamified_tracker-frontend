import axios from 'axios';

export const registerUser = async (formData) => {
  console.log('Data sent to server: ', formData);

  if (!formData.username || !formData.email || !formData.password) {
    throw new Error('Form data is missing required fields');
  }
  
  try {
    const response = await axios.post('http://localhost:5000/api/user/register', formData, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  });
  console.log('User registered:', response.data);
  return response.data;
  } 
  catch (error) {
    console.error('Error response: ', error.response);
    throw error;
  }
};

export const fetchProfile = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};


export const loginUser = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', data);
    return response.data;
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};