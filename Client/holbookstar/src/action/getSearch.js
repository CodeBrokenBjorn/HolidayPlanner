import axios from 'axios'; 

const BACKEND_PATH = 'http://localhost:8900/';

export function addItem(newItem) {
    return axios.post(`${BACKEND_PATH}/items`, newItem);
}
export function editItem(updateItem) {
    return axios.put(`${BACKEND_PATH}/item/${updateItem.id}`, updateItem);
}
export function deleteItem(itemId) {
    return axios.delete(`${BACKEND_PATH}/item/${itemId}`);
}
//SINETHING NEED ADD
