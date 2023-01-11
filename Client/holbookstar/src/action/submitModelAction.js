import axios from "axios";
const BACKEND_URL = 'http://localhost:8900/';
const retrieveAllItems = async() =>
{
    let response = await axios.get(`${BACKEND_URL}bookPlan`)
    .then(response => {return response.data;
    
    });
    return response;

};

const addNewItems = async(items) => {
let response = await axios.post(`${BACKEND_URL}bookPlan`, items, {
    header: {
        'Content-Type': 'multipart/form-data'
    }
}).then(response => {
    return response.data;
});
return response;
    
}
const updateItems = async(items) => {
    let response = await axios.put(`${BACKEND_URL}bookPlan`, items, {
        header: {
            'Content-Type': 'multipart/form-data'
        } 
    }).then(response => {
        return response.data;
    });
    return response;
}

const deleteItems = async(id) =>
{
    try{
        const response = await axios.delete(`${BACKEND_URL}bookPlan/${id}`);
        return response.data;
    }catch(error) {
        throw error;
    }
};
export {
    retrieveAllItems,
    addNewItems,
    updateItems,
    deleteItems
    
}