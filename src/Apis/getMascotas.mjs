import axios from "axios";

export const getMascotas = async () => {
  try {
    const response = await axios.get('http://localhost:3009/pets/filter__$/1');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
};

