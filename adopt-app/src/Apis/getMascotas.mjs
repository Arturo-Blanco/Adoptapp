import axios from "axios";
export const baseUrl = 'http://localhost:3000/';

export const getMascotas = async (filter,pageNumber) => {
  try {
    const response = await axios.get(baseUrl+`pets/filter__${filter}/${pageNumber}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
};
