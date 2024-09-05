import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.astronomyapi.com/v2'; // Replace with the actual API URL

// Create an instance of axios with the base URL and default headers
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Function to get celestial objects or other data
export const fetchCelestialData = async () => {
  try {
    const response = await api.get('/celestial-objects'); // Replace with the actual endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching celestial data:', error);
    throw error;
  }
};
