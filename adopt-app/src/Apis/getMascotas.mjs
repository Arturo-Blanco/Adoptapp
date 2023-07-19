import axios from "axios";
export const baseUrl = 'http://localhost:3000/';

export const getMascotas = async () => {
  try {
    const response = await axios.get(baseUrl+`pets`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
};
