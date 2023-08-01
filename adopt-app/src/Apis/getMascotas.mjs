import axios from "axios";
export const baseUrl = 'http://localhost:3001/';

export const getMascotas = async (pageNumber) => {
  try {
    const response = await axios.get(baseUrl+`pets/filter__${pageNumber}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
};
