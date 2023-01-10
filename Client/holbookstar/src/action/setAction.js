import axios from "axios";
const BACKEND_URL = 'http://localhost:8900/';

const retrieveItems = async () => {
    let response = await axios.get(BACKEND_URL + "useBook").then(response => {
        return response.data;
    });
    return response;
}
const addItems = async (items) => {
    let response = await axios.post(BACKEND_URL + "useBook", items, {
        //need to add this 
        header: {
            'Content-Type': 'multipart/form-data'

        }
    })
        .then(response => {
            return response.data;
        });
}
const updateItem = async(items) => {
    try {
        let response = await
    }
}
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
    updateItems,
    removeItems
}