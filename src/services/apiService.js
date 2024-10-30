import axios from 'axios';

export const registerUser = async (formData) => {
  console.log('Data sent to server: ', formData);

  if (!formData.username || !formData.email || !formData.password) {
    throw new Error('Form data is missing required fields');
  }
  
  try {
    const response = await axios.post('http://localhost:5000/api/users/register', formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('User registered:', response.data);

  const token = response.data?.token;
  if (token) {
    localStorage.setItem('token', token);
    return response.data;
  }
  else {
    throw new Error ('Token not found in response');
  }

  } 
  catch (error) {
    console.error('Error response: ', error.response);
    throw error;
  }
};
