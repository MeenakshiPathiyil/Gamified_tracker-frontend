import axios from 'axios';

export const purchaseItem = async (itemId) => {
  try {
    const response = await axios.post('/api/game/purchase', {
      userId: localStorage.getItem('userId'), 
      itemId,
    });
    return response.data;
  } catch (error) {
    console.error('Error purchasing item:', error);
    throw error;
  }
};
