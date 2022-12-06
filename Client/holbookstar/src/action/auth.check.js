import axios from "axios";
const API_URL = "https://localhost:8080";

class AuthCheck {
    login(username, password) {
        return axios
        .post(API_URL + "SignIn", {
            username,
            password
        })
        .then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user" , JSON.stringify(response.data));

            }
            return response.data;

        });

    }
    // to log out
    logout() {
        localStorage.removeItem("user");
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthCheck();