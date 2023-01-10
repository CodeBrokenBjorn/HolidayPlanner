import React, { useState } from "react";
const BACKEND_PATH = "https://localhost:8900";
const intiTest = true;

const useRetrieveHook = () => {
    const [user , setUser] = useState({});
    const checkIfUserExist = () => !!localStorage.getItem("user");
    //Test goes here
    //retrieve ID username 
    
    if(!!checkIfUserExist){
        
        console.log("userExist");
    }
    else{
        console.log("Doesn't exist");
    }
   
    // const userData = async (username, password) => {
    

    // }
   
    // const BACKEND_PATH = "https://localhost:8900";
    // const isTesting = true;
    // const [user, getUser] = useState;
    // const[user, setUser] = () => {
        
    //     const checkIfUserExist = () => localStorage.getItem("user");
    //     const data = async(id, username) => {
    //         console.log('login user func')
    //         if(isTesting) {
    //             //Testing see if the data retrieving
    //             const testSt = {
    //                 id: `${id} TEST`,
    //                 username: `${username} TEST`
    //             }
    //             return setUser(testSt);
    //         }
    //         if(checkIfUserExist){
    //             const localUser = localStorage.getItem('user');
    //             return setUser(localUser);
    //         }
    //         return axios
    //         post(`${BACKEND_PATH}/login`)
    //         .then((response) => {
    //             const retrieveAll = response.data.notes.retrieveAll
    //             getUser(retrieveAll);
    //         })
    //         .catch(error => console.error(`Error: ${error}`));
    //     }
        
    //     useEffect(() =>{
    //         console.log(user, 'user')
    //     }, [user])

        

        
        // const data = [{
            //     id: 1 ,
            //     username: 'Bob', {
                
                //     }, 
                
                // }]
                // data.map
                // map is a modifer that returns = doesn't change orignal.
                //on click const newData = {id: 5, userna: bob}        
            //}

    // if(checkIfUserExist)
    // {
    //     console.log('test123') 
    //     const retrieveData = {
    //         username: '${username}'
    //     }
    // }

   return [user]
};
export default useRetrieveHook;