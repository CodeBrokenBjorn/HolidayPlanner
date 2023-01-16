import axios from "axios";
const BACKEND_URL = 'http://localhost:8900/';
const retrieveLocationDate = async(items) =>
{
    let response = await axios.get(`${BACKEND_URL}eventDater` , items)
    .then(response => {return response.data;
    });
    return response;
    
};
const updateEvent = async(items, itemId) => {
    let response = await axios.put(`${BACKEND_URL}eventDater/${itemId}`, items ,{
        headers: {
            'Content-Type': 'application/json'
        } 
    }).then(response => {
        return response.data;
    });
    return response;
};
const addDate = async(items) => {
    let response = await axios.post(`${BACKEND_URL}eventDater`, items, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        return response.data;
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
    updateEvent,
    deleteLocationDate,
    addDate,
    retrieveLocationDate
}
