 import axios from 'axios'; 
  
  /**
 * @constant {object} api - The axios instance.
 * @property {string} baseURL - The base url of the API.
 * @property {number} timeout - The timeout of the API.
 */
  const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
  })

export default api;

