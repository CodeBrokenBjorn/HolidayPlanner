import axios from "axios";

const BACKEND_PATH = "https://localhost:8900/";

export const Fetch_Items_Request = 'Fetch_Items_Request'; 
export const Fetch_Items_Success = 'Fetch_Items_Success'; 
export const Fetch_Items_Fail = 'Fetch_Items_Fail'; 
export const retrieveItems = () => ({
    type: Fetch_Items_Request
});

export const fetchItemsIfSucceded = items => ({
    type: Fetch_Items_Success,
    payload: items
});

export const fetchItemsIffailure = error => ({
    type: Fetch_Items_Fail,
    payload: error
});

export const fetchItemsOnRequest = () => {
    return itemsReturn => {
        itemsReturn(fetchItemsOnRequest());
        axios.get(`${BACKEND_PATH}userContent`)
        .then(response => response.data)
        .then(items => itemsReturn(fetchItemsIfSucceded(items)))
        .catch(error => itemsReturn(fetchItemsIffailure(error)));

    }
};