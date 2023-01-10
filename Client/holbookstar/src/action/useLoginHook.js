import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_PATH = "https://localhost:8900";
const isTesting = true;

const useLoginHook = () => {
  const [user, setUser] = useState({});
  //check if the user exist
  const checkIfUserExist = () => !!localStorage.getItem("user");
  // true -> false
  // !true = false
  // !false = true
  // const example = {lorem: "lipsum"}
  // !!example["lorem"] = true;
  // !!example["foo"] = false

  const login = async (username, password) => {
    console.log('login user func')
    if(isTesting) {
      const testUser = {
        username: `${username} TEST`
      } 

      return setUser(testUser);
    }
    //Need to look at this: UseEFFect for testing
    if(checkIfUserExist) {
      //set premision key here
      //have a aray that check roles
      
      const localUser = localStorage.getItem('user');
      return setUser(localUser);
    }

    return axios
    .post(`${BACKEND_PATH}/login`, { username, password })
    .then((response) => {
      if (response.data && response.data.accessToken) {
        localStorage.setItem("user", response.data);
        setUser(response.data);
      } else {
        throw Error("no access token");
      }
    })
    .catch((err) => console.warn(err));
  }

  const logout = () => {
    if (checkIfUserExist) localStorage.removeItem("user");
    setUser({});
  };

  useEffect(() => {
    console.log(user, 'user')
  }, [user])

  // DO THIS IS FOR ADD FUNCTIONS
  //   const add = () => {
  //   }

  return [user, login, logout];
};

export default useLoginHook;
