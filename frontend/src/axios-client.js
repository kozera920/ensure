import axios from 'axios';


// Adjust the import path as necessary
const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`
})

// Add a request interceptor to include the token in the headers
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN') 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Optionally, you can redirect to login or show a notification
      localStorage.removeItem('ACCESS_TOKEN');
      console.error('Unauthorized access - redirecting to login');
      // window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default axiosClient;