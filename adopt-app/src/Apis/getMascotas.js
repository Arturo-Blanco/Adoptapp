export const getMascotas= async()=>{
    try{
        const response = await fetch('https://647d3b58af98471085498b1c.mockapi.io/animals');
        const data = await  response.json();
        return data;

    }catch(error){
        console.log('Error:', error);
    }
}