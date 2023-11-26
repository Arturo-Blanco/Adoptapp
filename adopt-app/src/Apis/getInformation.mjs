import axios from "axios";
export const baseUrlInfo = 'http://localhost:3001/';

export const getInformation = async (pageNumber) => {
  try {
    const response = await axios.get( baseUrlInfo+`information/page/${pageNumber}` );
    const data = response.data;
    console.log(response);
    return data;
  } catch (error) {
    <h1> Error inesperado del servidor </h1>
  }
};
