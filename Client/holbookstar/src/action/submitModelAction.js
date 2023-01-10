import axios from "axios";
const BACKEND_URL = 'http://localhost:8900/';
const retrieveAllItems = async(items) =>
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
    let response = await axios.patch(`${BACKEND_URL}bookPlan`, items, {
        header: {
            'Content-Type': 'multipart/form-data'
        } 
    }).then(response => {
        return response.data;
    });
    return response;
}

const deleteItems = async(index, queryItems) => {
    console.log(queryItems);
    // let deleteItems = [...(items || []).slice(0, index), ...(items || []).slice(index + 1)]; 
//    let deleteItems = [...(queryItems || []).slice(0, id), ...(queryItems || []).slice(id + 1)];
    //const deleteItems = (queryItems || []).filter(queryItem => queryItem.id !== id);  
    queryItems.splice(index, 1);  
    let fulterId = queryItems.map(index => index.id);
    
    let deleteByIDs = queryItems.map(id => id.index);
    return axios
        .delete(`${BACKEND_URL}bookPlan`, {data: { id: fulterId}})
        .then(response => {
            return response.data;
        
        });
   
};
// const addNewItem = (event, counter) => {
//     event.preventDefault();
//     if(!title || body) {
//         return;
//     }
//     const[storeQuery, setStoreQuery] = useState([
//         {
//             items: {
//                 id: id,
//                 title: title,
//                 body: body,
//             },
//         },
//     ]); 
// }
// function handleSubmit(items) {
// if(!items) return;
// const itemsAdd = {
//     id:null,
//     text: items,
// };
// }
export {
    retrieveAllItems,
    addNewItems,
    updateItems,
    deleteItems
    
}