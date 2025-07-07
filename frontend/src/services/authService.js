
import axios from 'axios';

const API_VALIDATE = 'http://54.225.176.170:3005/api/validate'; 

export async function validateToken(token) {
  try {
    const response = await axios.get(API_VALIDATE, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al validar token:', error);
    return null;
  }
}
