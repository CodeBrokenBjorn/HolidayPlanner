import axios from "axios";
const BACKEND_URL = 'http://localhost:8900/';
const retrieveLocationDate = async(datePlan) =>
{
    let response = await axios.get(`${BACKEND_URL}eventDater`)
    .then(response => {return response.data;
    });
    return response;
    
};
const deleteLocationDate = async(id) =>
{
    try{
        const response = await axios.delete(`${BACKEND_URL}eventDater/${id}`);
        return response.data;
    }catch(error) {
        throw error;
    }
};
export {
    deleteLocationDate,
    retrieveLocationDate
}
