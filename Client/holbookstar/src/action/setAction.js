import axios from "axios";
const BACKEND_URL = 'http://localhost:8900/';

const retrieveItems = async () => {
<<<<<<< HEAD
    let response = await axios.get(BACKEND_URL + "eventDater").then(response => {
=======
    let response = await axios.get(`${BACKEND_URL}eventDater`).then(response => {
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
        return response.data;
    });
    return response;
}
const addItems = async (items) => {
<<<<<<< HEAD
    let response = await axios.post(BACKEND_URL + "eventDater", items, {
        //need to add this 
=======
    let response = await axios.post(`${BACKEND_URL}eventDater`, items, {
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
        header: {
            'Content-Type': 'multipart/form-data'
            
        }
    }).then(response => {
        return response.data;
    });
    return response;
}
<<<<<<< HEAD
// const updateItem = async(items) => {
//     try {
//         let response = await
//     }
// }
=======

>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
const removeItems = async(id) =>
{
    try{
        const response = await axios.delete(`${BACKEND_URL}eventDater/${id}`);
        return response.data;
    }catch(error) {
        throw error;
    }
};
// const updateItems = async (items) => {
//     //first need create a update that will basicly update the the righ post do it as id

//     let response = await axios.put(`${BACKEND_URL}useBook`, items,){
//         if(response <= items){
//             console.log("it work");
//         }

//     }

// }
// const removeItems = async (items) => {
//     const deleteIrtem = [...items.slice(0, count)]
// }
export {
    retrieveItems,
    addItems,
    removeItems
}